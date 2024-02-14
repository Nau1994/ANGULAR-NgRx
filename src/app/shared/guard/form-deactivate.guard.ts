import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface IDeactivateGuard {
  canExit:()=>boolean
}

@Injectable({providedIn:'root'})
export class formDeactivateGuard implements CanDeactivate<IDeactivateGuard>{

  canDeactivate(component: IDeactivateGuard, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // console.log(component)
    // // if(component.canExit){
    // //   console.log(component.canExit())
    // // }
    return component.canExit();
  }
};
