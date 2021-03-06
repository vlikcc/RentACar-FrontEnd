import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl="https://localhost:44338/api/"
  constructor(private httpClient:HttpClient) { }
  
  getBrands():Observable<ListResponseModel<Brand>>
  {
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl+"brands/getall")
  }

  addBrand(brand:Brand)
  {
    return this.httpClient.post(this.apiUrl+"brands/add",brand)
  }
   deleteBrand(brand:Brand)
   {
     return this.httpClient.post(this.apiUrl+"brands/delete",brand);     
   }
   updateBrand(brand:Brand)
   {
     return this.httpClient.post(this.apiUrl+"brands/update",brand)
   }

}
