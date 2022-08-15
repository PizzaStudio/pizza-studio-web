import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(userName:string, password:string){
   return this.http.post<any>('http://localhost:8080/login',{userName,password})
   .pipe(
   map((userData: any ) =>{
    sessionStorage.setItem('username',userName);
    let tokenStr= 'Bearer '+userData.token;
    sessionStorage.setItem('token', tokenStr);
    return userData;
   })
   )
  }

  isUserLoggedIn() {
      let user = sessionStorage.getItem('username')
      //console.log(!(user === null))
      return !(user === null)
    }

    logOut() {
      sessionStorage.removeItem('username')
    }
}
