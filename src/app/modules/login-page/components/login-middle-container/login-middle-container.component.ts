import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

import { InputModel } from '../../models/InputModel';
import { ButtonModel } from '../../models/ButtonModel';

@Component({
  selector: 'app-login-middle-container',
  templateUrl: './login-middle-container.component.html',
  styleUrls: ['./login-middle-container.component.css']
})
export class LoginMiddleContainerComponent implements OnInit {
  
  buttonModel:ButtonModel=<ButtonModel>{
  	'type':'submit',
  	'text':'login'
  }
  
  loginForm = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  });
  
  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit() {
  	  alert('form value is thrown to console');
	  console.log(this.loginForm.value);
	}
  get username(){
   return this.loginForm.get('username');
  }
  
  get password() {
   	return this.loginForm.get('password');
  }
  

}
