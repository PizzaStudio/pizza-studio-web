import { Component, OnInit } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   userName: string = "";
   password: string = "";
   isError: boolean = false;
   error = {
    message: undefined
   }

  constructor(private authenticationService: AuthenticationService) { 
  }

  ngOnInit(): void {
  }

  login(){
    if(!this.userName && !this.password){
      this.isError = true;
    }
    else
   {
    console.log("Inside")
    this.isError = false;
    this.authenticationService.authenticate(this.userName,this.password)
    .pipe(
      catchError(err =>{
        return err;
      })
    )
    .subscribe()
   } 
  }
}
