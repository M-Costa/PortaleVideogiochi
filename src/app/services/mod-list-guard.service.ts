import { Injectable } from '@angular/core';
import { CanActivateChild, CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ModListGuardService implements CanActivate { 

  constructor(private router:Router) { }
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    if(sessionStorage.getItem('user')!=='admin')
    this.router.navigateByUrl('/error');
    
    return sessionStorage.getItem('user')=='admin';
  }

}
