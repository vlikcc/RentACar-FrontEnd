import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl="https://localhost:44338/api/"

  constructor(private httpClient:HttpClient) { }

  addCustomer(customer:Customer)
  {
    return this.httpClient.post(this.apiUrl+"customers/add",customer);
  }

  updateCustomer(customer:Customer)
  {
    return this.httpClient.post(this.apiUrl+"customers/update",customer);
  }

  deleteCustomer(customer:Customer)
  {
    return this.httpClient.post(this.apiUrl+"customers/delete",customer);
  }

  getAllCustomers():Observable<ListResponseModel<Customer>>
  {
    return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl+"customers/getall");
  }

}
