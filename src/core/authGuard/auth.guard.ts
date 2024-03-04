import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
/* Service calling for authentication */
import { RestApiService } from '../service/RestApiService.service'
/* Service calling for authentication */
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private _authservice:RestApiService,private _router:Router){
  }
  canActivate(): boolean {
    console.log("Can activate")
    if(this._authservice.loggedIn()){
      return true
    }
    else
    {
      this._router.navigate(['./']);
      return false;
    }
  }
}
