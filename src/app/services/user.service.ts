import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl="https://localhost:44338/api/"
  constructor(private httpClient:HttpClient) { }

  getAllUsers():Observable<ListResponseModel<User>>
  {
    return this.httpClient.get<ListResponseModel<User>>(this.apiUrl+"users/getall");
  }

  addUser(user:User)
  {
    return this.httpClient.post(this.apiUrl+"users/add",user);
  }

  updateUser(user:User)
  {
    return this.httpClient.post(this.apiUrl+"users/update",user);
  }
  
   deleteUser(user:User)
   {
     return this.httpClient.post(this.apiUrl+"users/delete",user);
   }
}
