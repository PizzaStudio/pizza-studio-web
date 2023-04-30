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
    message: undefined,
    type: 'alert alert-danger alert-dismissible fade show',
    show: false
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
        this.error.message = err.error.message?err.error.message:"Internal Server Error";
        this.error.show = true;
        this.timeoutAlert();
        return err;
      })
    )
    .subscribe()
   } 
  }

   timeoutAlert() {
    window.setTimeout(() =>{
      this.error.show = false;
    },3000)
  }
}


