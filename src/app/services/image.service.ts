import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/image';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  apiUrl="https://localhost:44338/api/"
  constructor(private httpClient:HttpClient) { }
  
  
  getImages():Observable<ListResponseModel<CarImage>>
  {
    return this.httpClient.get<ListResponseModel<CarImage>>(this.apiUrl+"CarImages/getall");
  }

  getImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>>
  {
    let path=this.apiUrl+"CarImages/getimagesbycarid?id="+carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(path);
  }
}
