import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()

export class FakeBackendInterceptor implements HttpInterceptor{
    intercept(request : HttpRequest<any>, next: HttpHandler){

        return next.handle(request);
    }
}