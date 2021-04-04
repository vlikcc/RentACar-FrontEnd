import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl="https://localhost:44338/api/"

  constructor(private httpClient:HttpClient) { }

  addRental(rental:Rental)
  {
    this.httpClient.post(this.apiUrl+"rentals/add",rental);
  }

  updateRental(rental:Rental)
  {
    this.httpClient.post(this.apiUrl+"rentals/update",rental);    
  }

  deleteRental(rental:Rental)
  {
    this.httpClient.post(this.apiUrl+"rentals/delete",rental);
  }

  getAllRentals():Observable<ListResponseModel<Rental>>
  {
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl+"rentals/getall");
  }

  getRentalByCarId(carId:number)
  {
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl+"rentals/getrentalbycarid?carId="+carId)
  }

  getRentalByCustomerId(customerId:number)
  {
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl+"rentals/getrentalbycustomerid?customerId="+customerId);
  }
}
