import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardServiceService implements CanActivateChild {

  constructor(private router:Router) { }
  
  canActivateChild(){
    if(sessionStorage.getItem('user')!=null){
       return true;
    }else{
      this.router.navigateByUrl('/login');
      return false;
    }
  }
  }
}
