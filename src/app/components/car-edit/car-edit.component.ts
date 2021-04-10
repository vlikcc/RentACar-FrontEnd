import { getLocaleFirstDayOfWeek } from '@angular/common';
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
  currentCar:Car;
  
  constructor(
     private carService:CardetailService,
     private formBuilder:FormBuilder,
     private activatedRoute:ActivatedRoute,
     private toastrService:ToastrService,
     ) { }

  ngOnInit(): void { 
  
    this.activatedRoute.params.subscribe(params=>{
      if (params[""]) {
        this.getCars(); 
        
          
      }
      else{
        this.getCars();
        console.log("else")
      }
    }) 
    
  }

  

  getCars()
  {
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data;
      
       
    })
  }

  getCurrentCar(car2:Car)
  {
    
    if (car2==this.currentCar) {

      return "btn btn-outline-success"      
    }
    else{
      return "btn btn-outline-secondary"
    }
    
  }

  setCurrentCar(car2:Car)
  {
    this.currentCar==car2;
   
  }
}



