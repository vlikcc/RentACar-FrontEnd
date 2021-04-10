import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetail } from '../models/cardetail';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root',
})
export class CardetailService {
  apiUrl = 'https://localhost:44338/api/';
  constructor(private httpClient: HttpClient) {}

  getCarDetails(): Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(
      this.apiUrl + 'cars/getcardetails'
    );
  }

  getCarDetailsByCarId(
    carId: number
  ): Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(
      this.apiUrl + 'cars/getcardetailsbycarid?carId=' + carId
    );
  }

  getCarDetailsByBrandId(
    brandId: number
  ): Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(
      this.apiUrl + 'cars/getcardetailsbybrandId?brandId=' + brandId
    );
  }

  getCarDetailsByColorId(
    colorId: number
  ): Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(
      this.apiUrl + 'cars/getcardetailsbycolorid?colorId=' + colorId
    );
  }

  

  getCars():Observable<ListResponseModel<Car>>
  {
    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl+"cars/getall")
  }

  addCar(car:Car)
  {
    return this.httpClient.post(this.apiUrl+"cars/add",car);
  }
   deleteCarByCarId(carId:number)
   {
     return this.httpClient.post(this.apiUrl+"cars/deletecarbycarid?id=",carId);
   }

   updateCar(car:Car)
   {
     return this.httpClient.post(this.apiUrl+"cars/update",car);
   }
    getCarByBrandId(brandId:number)
    {
      return this.httpClient.get(this.apiUrl+"cars/getbybrandId?Id="+brandId);
    }

    getCarById(carId:number):Observable<ListResponseModel<Car>>
    {
      return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl+"cars/getbyid?id="+carId);
    }

    getCarByColorId(colorId:number)
    {
      return this.httpClient.get(this.apiUrl+"cars/getbycolorid?colorid="+colorId);
    }
}
