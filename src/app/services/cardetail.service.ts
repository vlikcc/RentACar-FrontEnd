import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetail } from '../models/cardetail';

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
}
