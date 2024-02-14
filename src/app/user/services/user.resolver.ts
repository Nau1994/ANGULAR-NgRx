import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import { User } from '../user.model';
import { Observable, catchError, map, throwError } from 'rxjs';
import { UsersService } from './users.service';
import { AlertServiceService } from '../../shared/services/alert-service.service';

@Injectable()
export class userResolver implements Resolve<User>{
  constructor(private router:Router,private userService:UsersService,private alerService:AlertServiceService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User | Observable<User> | Promise<User> {
    
    // console.log(typeof route.params["id"])
    return this.userService.getUsersById(Number(route.params["id"])).pipe(
      map(data=>data),
      catchError(err=>throwError(()=>{this.alerService.showErrorModal(err)}))
    )
  }
};
