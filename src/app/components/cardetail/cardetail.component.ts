import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/cardetail';
import { CardetailService } from 'src/app/services/cardetail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css'],
})
export class CarDetailComponent implements OnInit {
  cardetails: CarDetail[] = [];
  carId: number[] = [];
  brandId: number[] = [];

  constructor(private carService: CardetailService,private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params["carId"]) {
        this.getCarDetailsByCarId(params["carId"])        
      }
      else{
        return console.log("sayfa bulunamadı");
      }
    })
    
  }

  getCarDetails() {
    this.carService.getCarDetails().subscribe((response) => {
      this.cardetails = response.data;
    });
  }

  getCarDetailsByCarId(carId: number) {
    this.carService.getCarDetailsByCarId(carId).subscribe((response) => {
      this.cardetails = response.data;
    });
  }

  getCarDetailsByBrandId(brandId: number) {
    this.carService.getCarDetailsByCarId(brandId).subscribe((response) => {
      this.cardetails = response.data;
    });
  }

  getCarId() {
    this.getCarDetails();
    this.cardetails.forEach((element) => {
      this.carId.push(element.carId);
    });
  }

  getBrandId() {
    this.getCarDetails();
    this.cardetails.forEach((element) => {
      this.brandId.push(element.brandId);
    });
  }
}
