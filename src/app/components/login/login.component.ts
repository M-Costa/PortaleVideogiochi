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
 username:string;
 password:string;
  ngOnInit(): void {
  }

  login() {
   
    if (this.username != null && this.password != null && this.username!=="" && this.password!=="") {
      sessionStorage.setItem('user',this.username);
      this.router.navigateByUrl('/portale/home');
    }

  }

}
