import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponent } from './reactive/reactive.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { formDeactivateGuard } from '../shared/guard/form-deactivate.guard';

const routes:Routes=[
  {path:"",component:ReactiveComponent,canDeactivate:[formDeactivateGuard]}
]


@NgModule({
  declarations: [
    ReactiveComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ReactiveModule { }
