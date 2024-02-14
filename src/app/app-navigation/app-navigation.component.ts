import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../shared/services/auth/auth-service.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './app-navigation.component.html',
  styleUrl: './app-navigation.component.css'
})
export class AppNavigationComponent implements OnInit{
  loggedIn:boolean=false;
  constructor(private authService:AuthServiceService){}
  
  ngOnInit(): void {
    this.loggedIn=this.authService.autoLogin()
    this.authService.userSub.subscribe(user=>{
      if(user?.token){
        this.loggedIn=true
        
      }else{
        this.loggedIn=false
      }
    })
  }

  onLogOut(){
    this.authService.logout()
    this.loggedIn=false
  }
}
