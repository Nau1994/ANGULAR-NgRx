import { Component } from '@angular/core';
import { User } from '../user.model';
import { UsersService } from '../services/users.service';
import { AlertServiceService } from '../../shared/services/alert-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users:User[]=[]
  isLoading=false
  constructor(private userService:UsersService,private alerService:AlertServiceService){}

  ngOnInit(){
    this.isLoading=true
    this.userService.getUsers().subscribe((data)=>{
      this.users=data
      this.isLoading=false
    },
    error=>{
      console.log(error)
      this.alerService.showErrorModal(error)
      this.isLoading=false
    }
    )

  }

}
