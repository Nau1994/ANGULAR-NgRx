import {  AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IDeactivateGuard } from '../../shared/guard/form-deactivate.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css'
})
export class TdfComponent implements AfterViewInit,IDeactivateGuard{
  submitted:boolean=false;
  users:any[]=[]
  @ViewChild('userform') formObject!:NgForm;

  ngAfterViewInit(): void {
    this.setDefault()
  }

  private setDefault(){
    setTimeout(() => {
      if(this.formObject.controls["userdata"]){
       this.formObject.form.setValue({
           gender:"Male",
           userdata:{
               username:'Naushad',
               email:'cognizant@mail.com'
             },
           
           })
         }
         
         this.formObject.form.patchValue({
           userdata:{
             username:null,
             email:'humana@mail.com'
           },
           gender:'Male',
         })
       
   }, 1);
  }

  onSubmit(){
    // console.log(this.formObject.value)

    this.submitted=true
    this.users.push({
      id:Number(Math.floor(Math.random()*1000+1000).toString()+this.users.length.toString()),
      name:this.formObject.value.userdata.username,
      email:this.formObject.value.userdata.email,
      gender:this.formObject.value.gender
    })
    
    this.reset()

  }

  reset(){
    this.formObject.form.reset()
    this.setDefault()
  }
  clear(){
    this.users=[]
  }

  canExit(){
    if (this.formObject.form.dirty && !confirm("unsaved data, are you sure want to exit ?")) return false
    return true
  }
}
