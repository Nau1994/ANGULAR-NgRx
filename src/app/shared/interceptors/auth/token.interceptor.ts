import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, switchMap, take, tap } from "rxjs";
import { AuthServiceService } from "../../services/auth/auth-service.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor{

  constructor(private authService:AuthServiceService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    return this.authService.userSub.pipe(take(1),
    switchMap(user=>{
      if(user?.token && req.url.includes("https://fir-post-app-9497d-default-rtdb.firebaseio.com/")){
        const modifiedReq=req.clone({
          params:req.params.append("auth",user.token)
        })
        
        return next.handle(modifiedReq)
      }
      else if(user?.token){
        const modifiedReq=req.clone({
          headers:req.headers.append("TEST-HEADER","TEST-Header")
        })
        
        return next.handle(modifiedReq)
      }
      return next.handle(req).pipe(tap(event=>{
        if(event.type===HttpEventType.Response){
          console.log("event-from-interceptor",event)
        }
      }))
    })
    )
  }
};
