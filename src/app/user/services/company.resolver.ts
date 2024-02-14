import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import { Company } from '../user.model';
import { Observable } from 'rxjs';

@Injectable()
export class companyResolver implements Resolve<Company>{
  constructor(private router:Router){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Company | Observable<Company> | Promise<Company> {
    
    // console.log(this.router.getCurrentNavigation()?.extras.state)
    return this.router.getCurrentNavigation()?.extras.state as Company
  }
};
