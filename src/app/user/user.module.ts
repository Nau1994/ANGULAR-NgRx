import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AddressComponent } from './address/address.component';
import { CompanyComponent } from './company/company.component';
import { userResolver } from './services/user.resolver';
import { addressResolver } from './services/address.resolver';
import { companyResolver } from './services/company.resolver';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './services/users.service';
import { SharedModule } from '../shared/shared.module';
import { LoadSpinnerComponent } from '../shared/load-spinner/load-spinner.component';

const routes:Routes=[
  {path:"",component:UsersComponent},
  {path:"user/:id",component:UserComponent,resolve:{user:userResolver},
  children:[
    {path:"",redirectTo:"address",pathMatch:"full"},
    {path:"address",component:AddressComponent,resolve:{address:addressResolver}},
    {path:"company",component:CompanyComponent,resolve:{company:companyResolver}}
  ]},
  
]


@NgModule({
  declarations: [
    UsersComponent,
    AddressComponent,
    CompanyComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers:[
    userResolver,addressResolver,companyResolver,UsersService
  ]
})
export class UserModule { }
