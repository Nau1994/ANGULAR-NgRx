import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
  user!:User
  isLoading=false
  constructor(private route:ActivatedRoute){}
  ngOnInit(){
    this.isLoading=true
    this.route.data.subscribe((data)=>{
      this.user=data['user']
      this.isLoading=false
    })
  }
}
