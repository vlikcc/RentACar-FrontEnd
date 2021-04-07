import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/cardetail';
import { CarColorPipe } from 'src/app/pipes/car-color.pipe';
import { CardetailService } from 'src/app/services/cardetail.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cardetails: CarDetail[] = [];
  carsId: number[] = [];
  brandsId: number[] = [];
  filterText:string;
  constructor(private carService: CardetailService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params=>{
      if (params["brandId"]) {       
        this.getCarDetailsByBrandId(params["brandId"]); 
          
      }
      else if (params["colorId"]) {
        this.getCarDetailsByColorId(params["colorId"]);
        
      
      } else {
        this.getCarDetails();
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
    
    this.carService.getCarDetailsByBrandId(brandId).subscribe((response) => {
      this.cardetails = response.data;
     
    });
  }

  getCarDetailsByColorId(colorId:number)
  {

    this.carService.getCarDetailsByColorId(colorId).subscribe((response)=>{
      this.cardetails=response.data;
    })
  }

  getCarId() {
    this.getCarDetails();
    this.cardetails.forEach((element) => {
      this.carsId.push(element.carId);
    });
  }

  getBrandId() {
    this.getCarDetails();
    this.cardetails.forEach((element) => {
      this.brandsId.push(element.brandId);
    });
  }
  colorFilter()
  {
    
  }

}
