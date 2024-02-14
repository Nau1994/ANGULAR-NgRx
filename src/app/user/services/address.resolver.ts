import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import { User as Address } from '../user.model';
import { Observable } from 'rxjs';

@Injectable()
export class addressResolver implements Resolve<Address>{
  constructor(private router:Router){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Address | Observable<Address> | Promise<Address> {
    
    // console.log(this.router.getCurrentNavigation()?.extras.state)
    // console.log(route)
    return this.router.getCurrentNavigation()?.extras.state as Address
  }
};
