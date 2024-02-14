import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from '../../shared/services/auth/auth-service.service';
import { Router } from '@angular/router';
import { AlertServiceService } from '../../shared/services/alert-service.service';
import { User } from '../../user/user.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit ,AfterViewInit, AfterViewChecked{

  @ViewChild('loginForm') loginForm!:NgForm
  loggedIn:boolean=false
  
  constructor(private authService:AuthServiceService,private router:Router,private alertService:AlertServiceService){}

  ngOnInit(): void {
    this.loggedIn=this.authService.autoLogin()

  }

  ngAfterViewInit(): void {
    // console.log(this.loginForm.value)
  }

  ngAfterViewChecked(): void {
    // console.log(this.loginForm.value)
  }

  onLogin(){
    if(this.loginForm.valid){
      // console.log(this.loginForm.value)
      this.authService.userLogin(this.loginForm.value.email,this.loginForm.value.password).subscribe(
        response=>{
          console.log(response)
          this.loggedIn=true
          this.router.navigate(['/'])
        },
        error=>{
          console.log(error)
          this.alertService.showErrorModal(error)
        }
      )
    }
  }

  onLogOut(){
    this.authService.logout()
    this.loggedIn=false
  }

  onSignUp(){
    if(this.loginForm.valid){
      // console.log(this.loginForm.value)
      this.authService.userSignUp(this.loginForm.value.email,this.loginForm.value.password).subscribe(
        response=>{console.log(response)},
        error=>{
          console.log(error)
          this.alertService.showErrorModal(error)
        }
      )
    }
    
  }
}