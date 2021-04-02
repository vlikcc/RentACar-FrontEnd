import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as EventEmitter from 'node:events';
import { element } from 'protractor';
import { CarDetail } from 'src/app/models/cardetail';
import { CarImage } from 'src/app/models/image';
import { CardetailService } from 'src/app/services/cardetail.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css'],
})
export class CarDetailComponent implements OnInit {
  cardetails: CarDetail[] = [];
  carId: number[] = [];
  brandId: number[] = [];
  carImages:CarImage[]=[];
  imagePath:string[]=[];
  
  constructor(private carService: CardetailService,private activatedRoute:ActivatedRoute, private carImageService:ImageService) {}
 
  ngOnInit(): void {    
    console.log("ngoninit");
    this.activatedRoute.params.subscribe(params=>{
      if (params["carId"]) {
        console.log("if")
        this.getImagesByCarId(params["carId"]); 
        console.log(params);
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
    console.log("methot")
    this.carService.getCarDetailsByCarId(carId).subscribe((response) => {
      this.cardetails = response.data;
      console.log(response.data);
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

  getImagesByCarId(carId:number)
  {
    this.activatedRoute.params.subscribe(params=>{
      if (params["carId"]) {
        this.carImageService.getImagesByCarId(carId).subscribe(response=>{
          this.carImages=response.data;
          console.log(response.data);
          
        })
        
      }
      else{
        console.log("hata")
      }
    })
    
  }
  
}
