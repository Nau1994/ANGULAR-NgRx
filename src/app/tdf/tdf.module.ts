import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TdfComponent } from './tdf/tdf.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { formDeactivateGuard } from '../shared/guard/form-deactivate.guard';

const routes:Routes=[
  {path:"",component:TdfComponent,canDeactivate:[formDeactivateGuard]}
]


@NgModule({
  declarations: [
    TdfComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class TDFModule { }
