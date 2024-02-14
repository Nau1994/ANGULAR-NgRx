import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadSpinnerComponent } from './load-spinner/load-spinner.component';
import { ErrorModalComponent } from './error-modal/error-modal.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertServiceService } from './services/alert-service.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthServiceService } from './services/auth/auth-service.service';
import { TokenInterceptor } from './interceptors/auth/token.interceptor';



@NgModule({
  declarations: [
    LoadSpinnerComponent,
    ErrorModalComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModalModule
  ],
  exports:[
    LoadSpinnerComponent
  ],
  providers:[{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true},
    AlertServiceService
  ]
})
export class SharedModule { }
