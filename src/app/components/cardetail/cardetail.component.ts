import { Component, OnInit } from '@angular/core';
import { CarDetail } from 'src/app/models/cardetail';
import { CardetailService } from 'src/app/services/cardetail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CarDetailComponent implements OnInit {
  cardetails:CarDetail[]=[]
  carId: number[]=[];
 
  constructor(private carService:CardetailService) { }

  ngOnInit(): void {
     this.getCarId();
    this.carId.forEach(element => {
      this.getCarDetailsByCarId(element);      
    });
    

  }

  getCarDetails()
  {
    this.carService.getCarDetails().subscribe(response=>{
      this.cardetails=response.data;
      
    });
  }

  getCarDetailsByCarId(carId:number)
  {
    this.carService.getCarDetailsByCarId(carId).subscribe(response=>{
      this.cardetails=response.data;
      
    })
  }

  getCarId()
  {
    this.getCarDetails();
    this.cardetails.forEach(element => {
      this.carId.push(element.carId);      
    });
    
  }

  

}
