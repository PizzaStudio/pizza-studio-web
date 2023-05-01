import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Register} from 'src/app/classes/register';
@Injectable({
  providedIn: 'root'
})
export class StudioService {

  constructor(private httpClient: HttpClient) { }

  public registerUser(userDetails: Register){
    return this.httpClient.post<Register>('http://localhost:8080/users/user',userDetails);
  }

}
