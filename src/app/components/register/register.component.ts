import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Register} from 'src/app/classes/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    selectedItem: any;
    registerForm: Register;
  constructor(private modalService:NgbModal) {
  this.registerForm = new Register();
   }

  ngOnInit(): void {
  }

   openMyModal(modal:any){
    this.modalService.open(modal);
   }

   registerUser(){
   //TODO Logic goes here.
   console.log(this.registerForm)
   }
}
