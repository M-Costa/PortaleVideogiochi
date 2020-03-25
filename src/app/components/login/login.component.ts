import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
 
  ngOnInit(): void {
  }

  login(nome:string,password:string) {
   
    if (nome != null && password != null && nome!=="" && password!=="") {
      sessionStorage.setItem('user',nome);
      this.router.navigateByUrl('/portale/home');
    }

  }

}
