import { Component, DoCheck, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormArray, FormControl, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { IDeactivateGuard } from '../../shared/guard/form-deactivate.guard';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent implements OnInit,DoCheck,IDeactivateGuard{
  submitted:boolean=false
  userForm!:FormGroup
  addedHobbies:string[]=[]
  users:{id:Number,name:String,email:String,gender:String,hobbies:string[]}[]=[]

  ngOnInit(): void {
    this.userForm=new FormGroup({
      userdata:new FormGroup({
        username:new FormControl(null,[Validators.required]),
        email:new FormControl('test@mail.com',[],[this.isRestrictedEmail as AsyncValidatorFn]),
      }),
      gender:new FormControl('Male'),
      hobby:new FormControl(null,[this.onAlreadyHobby.bind(this) as ValidatorFn]),
      hobbies:new FormArray([])
    })
  }

  ngDoCheck(): void {
    // console.log(this.userForm.value)
  }

  onAddHobby(value:string){
    if(!this.addedHobbies.includes(value) && value!=''){
      const control:FormControl=new FormControl(value,[Validators.required]);
    (<FormArray>this.userForm.get('hobbies')).push(control)
    this.addedHobbies.push(value)
    } 
  }

  get hobbies(){
    return (<FormArray>this.userForm.get('hobbies')).controls
  }

  onAdd(){
    this.submitted=true
    this.users.push({
      id:Number(Math.floor(Math.random()*1000+1000).toString()+this.users.length.toString()),
      name:this.userForm.value.userdata.username,
      email:this.userForm.value.userdata.email,
      gender:this.userForm.value.gender,
      hobbies:this.userForm.value.hobbies
    })

    console.log((<FormArray>this.userForm.get('hobbies')).clear())
    this.addedHobbies=[];
    this.userForm.reset()
  }

  onAlreadyHobby(control:FormControl):{[s:string]:boolean}|null{
    console.log(this.addedHobbies)
    if(this.addedHobbies.includes(control.value)){
      
      return {isAlreadyAdded:true}
    }else return null
  }

  isRestrictedEmail(control:FormControl):Promise<ValidationErrors|null>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value=="test@test.com"){
          // console.log({IsRestricted:true})
          resolve({IsRestricted:true})
        }else resolve(null)
      },200)
    })
  }

  canExit(){
    if (this.userForm.dirty && !confirm("unsaved data, You want to still exit?")) return false
    return true
  }

}
