import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { stringify } from 'querystring';
import { ReactiveFormsModule, FormGroup, FormControl,FormBuilder } from '@angular/forms';
import { UserProfileService } from 'src/app/services/user-profile.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private listaRegistrati:UserProfileService) { }
  ngOnInit(): void {
  };
  utente:FormGroup = new FormGroup ({
    username: new FormControl(),
    password: new FormControl()
  });
   
 login() {

   if (this.utente.get('username').value != null &&
    this.utente.get('password').value != null &&
     this.utente.get('username').value !== "" && 
     this.utente.get('password').value !== ""&& 
     this.listaRegistrati.checkUsersProfile((this.utente.get('username').value))) {
    sessionStorage.setItem('user',this.utente.get('username').value);
    this.router.navigateByUrl('/portale/home');
   }
};
}
