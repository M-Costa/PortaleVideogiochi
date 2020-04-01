import { Injectable } from '@angular/core';
import { UserProfile } from '../model/user-profile';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor() { }
  private users: UserProfile[]= [
    {email: '',
      username: 'admin',
      password:'admin',
      nome: '',
      cognome: '',
      dataDiNascita:new Date,
      cittàDiNacita:'',
      sesso:'',
      newsletterSubscription:true,
   },
   {email: '',
      username: 'user',
      password:'user',
      nome: '',
      cognome: '',
      dataDiNascita:new Date,
      cittàDiNacita:'',
      sesso:'',
      newsletterSubscription:true,
   },
   {email: '',
      username: 'marcos',
      password:'costa',
      nome: '',
      cognome: '',
      dataDiNascita:new Date,
      cittàDiNacita:'',
      sesso:'',
      newsletterSubscription:true,
   },
  ]
  checkUsersProfile(checkUser : String){
    let found: boolean = false;
    for(let i=0; i<this.users.length; i++){
      console.log(this.users[i].username)
     if(this.users[i].username === checkUser){
       found = true;
       console.log(found)
       return true;
     }
    }
    console.log(found)
    return false
  }
}

