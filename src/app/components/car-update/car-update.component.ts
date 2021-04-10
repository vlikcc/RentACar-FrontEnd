import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/cardetail';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CardetailService } from 'src/app/services/cardetail.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  carUpdateForm:FormGroup;
  car:Car[];
  brands:Brand[];
  colors:Color[]
  carId2:number;
  constructor(private formBuilder:FormBuilder,
    private carService:CardetailService,
    private brandService:BrandService,
    private colorService:ColorService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getBrands();
    this.getColors();        
    this.createCarUpdateForm();
    
   
    this.activatedRoute.params.subscribe(params=>{
      if (params["carId"]) {
        this.carId2=params["carId"];        
        this.getCarById(this.carId2)   
        
        
      }
     
    })
  }

  createCarUpdateForm()
  {
    this.carUpdateForm=this.formBuilder.group({
      id:[this.carId2,Validators.required],
      brandId:["",Validators.required],
      carName:["",Validators.required],
      colorId:["",Validators.required],
      modelYear:["",Validators.required],
      dailyPrice:["",Validators.required],
      description:["",Validators.required]   

    })
    
    
   
  }

  updateCar()
  {  
    
    if (this.carUpdateForm.valid) {
      
      let carModel=Object.assign({},this.carUpdateForm.value)
      this.car[0].id=carModel.id,
      this.car[0].brandId=carModel.brandId,
      this.car[0].carName=carModel.carName,
      this.car[0].dailyPrice=carModel.dailyPrice,
      this.car[0].modelYear=carModel.modelYear,
      this.car[0].description=carModel.description         
      this.carService.updateCar(this.car[0]).subscribe(response=>{
        this.toastrService.success("ARAÇ GÜNCELLENDİ",carModel.carName)
      },responseError=>{
        this.toastrService.success(responseError.message)
      })       
    }
    else
    {     
      console.log(this.carUpdateForm.value);
     
      this.toastrService.error("Form Eksik","Hata")
    }
       
  }

  getBrands()
  {
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data
    })
  }
  getColors()
  {
    this.colorService.getColors().subscribe(response=>{
      this.colors=response.data;
    })
  }

  getCarById(carId:number) {
   
    this.carService.getCarById(this.carId2).subscribe((response) => {
      this.car = response.data      
      this.carUpdateForm.setValue({
        id:this.carId2,
        brandId:this.car[0].brandId,
        carName:this.car[0].carName,
        colorId:this.car[0].colorId,
        modelYear:this.car[0].modelYear,
        dailyPrice:this.car[0].dailyPrice,
        description:this.car[0].description
       
      })
      console.log(this.carUpdateForm.value)
    });
  }

}
