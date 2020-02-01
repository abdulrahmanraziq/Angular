import { Injectable } from '@angular/core';
import {LocalstorageService} from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationserviceService {

  constructor(private storage : LocalstorageService) { }

  isAuth(): boolean {
    return this.storage.get('loggedIn') ? true : false;
  }
}
