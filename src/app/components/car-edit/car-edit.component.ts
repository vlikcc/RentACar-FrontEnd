import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CardetailService } from 'src/app/services/cardetail.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {
  cars:Car[]=[];
  constructor(
     private carService:CardetailService,
     private formBuilder:FormBuilder,
     private activatedRoute:ActivatedRoute,
     private toastrService:ToastrService,
     ) { }

  ngOnInit(): void {
    this.activatedRoute.root   
     
        this.getCars();
     
      
    
  }

  

  getCars()
  {
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data;
    })
  }
}


