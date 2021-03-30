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
  constructor(private carService:CardetailService) { }

  ngOnInit(): void {
    this.getCarDetails();

  }

  getCarDetails()
  {
    this.carService.getCarDetails().subscribe(response=>{
      this.cardetails=response.data;
    })
  }

}
