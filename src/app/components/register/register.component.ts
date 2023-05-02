import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Register} from 'src/app/classes/register';
import {Role} from 'src/app/classes/enums/role';
import {StudioService} from 'src/app/services/studio.service';
import { catchError, map, timer, take } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    selectedItem: any;
    registerForm: Register;
    secondsLeft: any;
    modalReference: any;
     error = {
        message: "",
        type: 'alert alert-danger alert-dismissible fade show',
        show: false,
        showTimer: false
       }
       countdown$ = timer(0, 1000).pipe(
             take(5),
             map(secondsElapsed => 5 - secondsElapsed)
           );

  constructor(private modalService:NgbModal, private studioService: StudioService) {
  this.registerForm = new Register();
   }

  ngOnInit(): void {
  }

   openMyModal(modal:any){
    this.modalReference = this.modalService.open(modal);
   }

   registerUser(){
       this.registerForm.roles = [Role.User];
       this.studioService.registerUser(this.registerForm)
       .pipe(
            map((registeredUser: Register) =>{
                this.error.type = "alert alert-success alert-dismissible fade show";
                this.error.message = "User Register Successfully, Please login to continue";
                this.error.show = true;
                this.error.showTimer = true;
                setTimeout(() => {
                     this.modalReference.close();
                  }, 5000)
                return registeredUser;
            }),
             catchError((err:any) =>{
               this.error.message = err.error.message?err.error.message:"Failed to register user, Please try again";
               this.error.show = true;
               return err;
             })
           )
       .subscribe();
   }


}
