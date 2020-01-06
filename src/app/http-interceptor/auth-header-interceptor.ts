import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor{
    
    intercept(
        request: HttpRequest<any>, next: HttpHandler
      ) : Observable<HttpEvent<any>> {

        const idToken = localStorage.getItem("id_token");

        if(idToken){
            const cloned  = request.clone({
                headers : request.headers.set("Authorization", " Bearer " + idToken)
            });
            return next.handle(cloned);
        }
        else{
           return next.handle(request);
        }
      }    


}
