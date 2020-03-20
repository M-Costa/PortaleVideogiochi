import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

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
    if (nome !== null && password !== null) {
      this.router.navigate(['/home']);
    }

  }

}
