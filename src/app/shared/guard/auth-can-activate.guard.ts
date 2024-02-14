import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, mergeMap, take } from 'rxjs';
import { AuthServiceService } from '../services/auth/auth-service.service';
import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class AuthCanActivateGuard implements CanActivate{

  constructor(private authService:AuthServiceService,private router:Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    return this.authService.userSub.pipe(
      take(1),
      map(user=>{
        if(user?.token) return this.router.createUrlTree(['/home']);
        return true
      })
    )
    
  }
  
};
