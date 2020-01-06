import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {AuthHeaderInterceptor} from './auth-header-interceptor';
import { ErrorHandler } from '@angular/core';
 
export const HttpInterceptProviders = [
    {provide : HTTP_INTERCEPTORS, useClass : AuthHeaderInterceptor, multi:true}
   
]