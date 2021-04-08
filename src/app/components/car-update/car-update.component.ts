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
  cars:CarDetail[]=[];
  brands:Brand[];
  colors:Color[]
  constructor(private formBuilder:FormBuilder,
    private carService:CardetailService,
    private brandService:BrandService,
    private colorService:ColorService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createCarUpdateForm();
    this.getBrands();
    this.getColors();
    this.activatedRoute.params.subscribe(params=>{
     
    })
  }

  createCarUpdateForm()
  {
    this.carUpdateForm=this.formBuilder.group({
      brandId:["",Validators.required],
      carName:["",Validators.required],
      colorId:["",Validators.required],
      modelYear:["",Validators.required],
      dailyPrice:["",Validators.required],
      description:["",Validators.required]
      

    })
    console.log("deneme")
  }

  updateCar()
  {  
    if (this.carUpdateForm.valid) {
      let carModel=Object.assign({},this.carUpdateForm.value)
      carModel.carId=this.cars[0].carId;
      this.carService.updateCar(carModel).subscribe(response=>{
        this.toastrService.success("ARAÇ GÜNCELLENDİ",carModel.carName)
      },responseError=>{
        this.toastrService.success(responseError.message)
      })       
    }
    else
    {
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

  getCarDetailsByCarId(carId:number) {
    this.carService.getCarDetailsByCarId(carId).subscribe((response) => {
      this.cars = response.data;
      this.carUpdateForm.setValue({
        colorId: this.cars[0].colorId,
        brandId: this.cars[0].brandId,
        name: this.cars[0].carName,
        modelYear: this.cars[0].modelYear,
        dailyPrice: this.cars[0].dailyPrice,
        description: this.cars[0].description
      })
    });
  }

}
