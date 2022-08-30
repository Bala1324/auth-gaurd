import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router:Router) { }

  authForm:FormGroup
  ngOnInit(): void {
    this.authForm = new FormGroup({
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'pass': new FormControl('bala',Validators.required)
    })
  }
  goToHome(){
    this.router.navigateByUrl('/home')
   }

   onSubmit(){    
      console.log(this.authForm.value)
      if(this.authForm.value.email === 'bala@gmail.com' && this.authForm.value.pass === 'bala'){
        alert('login Success!')
        localStorage.setItem('login','logedin')
        
        this.router.navigateByUrl('/home')
      }else{
        alert('login failed!')
      }
   }

}

