import { Injectable } from '@angular/core';
import { CanActivateChild, Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardServiceService implements CanActivateChild ,CanActivate {


  constructor(private router:Router) { }
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {

    
    return sessionStorage.getItem('user')==null;
  }

  canActivateChild(){
    if(sessionStorage.getItem('user')!=null){
       return true;
    }else{
      this.router.navigateByUrl('/login');
      return false;
    }
  }

  }

