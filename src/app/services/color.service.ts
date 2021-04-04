import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl="https://localhost:44338/api/"
  constructor(private httpClient:HttpClient) { }

  addColor(color:Color)
  {
    return this.httpClient.post(this.apiUrl+"colors/add",color);
  }

  deleteColor(color:Color)
  {
    return this.httpClient.post(this.apiUrl+"colors/delete",color);
  }
   updateColor(color:Color)
   {
     return this.httpClient.post(this.apiUrl+"colors/update",color);
   }

  getColors():Observable<ListResponseModel<Color>>
  {
    return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl+"colors/getall");
  }
}
