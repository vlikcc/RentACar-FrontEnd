import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CardetailService } from 'src/app/services/cardetail.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {
  carAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private carService:CardetailService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createCarAddForm();
  }
  createCarAddForm()
  {
    this.carAddForm=this.formBuilder.group({
      brandId:["",Validators.required],
      carName:["",Validators.required],
      colorId:["",Validators.required],
      modelYear:["",Validators.required],
      dailyPrice:["",Validators.required],
      description:["",Validators.required]

    })
  }

  addCar()
  {
    if (this.carAddForm.valid) {

      let carModel=Object.assign({},this.carAddForm.value)
      this.carService.addCar(carModel).subscribe(data=>{
        this.toastrService.success("ARAÇ EKLENDİ",carModel.carName)
      })
      
    }
    else
    {
      this.toastrService.error("ARAÇ EKLENEMEDİ");
    }
  }

}
