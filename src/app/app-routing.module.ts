import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { postCanActivateGuard } from './shared/guard/post-can-activate.guard';
import { AuthCanActivateGuard } from './shared/guard/auth-can-activate.guard';

const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:"full"},
  {path:'home',loadChildren:()=>import('../app/home/home.module').then(m=>m.HomeModule)},
  {path:'posts',canActivate:[postCanActivateGuard],loadChildren:()=>import('../app/post/post.module').then(m=>m.PostModule)},
  {path:'users',loadChildren:()=>import('../app/user/user.module').then(m=>m.UserModule)},
  {path:'tdf',loadChildren:()=>import('../app/tdf/tdf.module').then(m=>m.TDFModule)},
  {path:'reactive',loadChildren:()=>import('../app/reactive/reactive.module').then(m=>m.ReactiveModule)},
  {path:'auth',canActivate:[AuthCanActivateGuard],loadChildren:()=>import('../app/auth/auth.module').then(m=>m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
