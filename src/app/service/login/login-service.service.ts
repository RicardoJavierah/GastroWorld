import { Injectable, inject } from '@angular/core';
import { appsetting } from '../../settings/appsetting';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LoginServiceService {

  api = appsetting.apiURL
  router = inject(Router)

  constructor() { 

  }

  isAuth(user:String,password:String){
    if(user == "Ricardo" && password =="12345"){
      console.log(user)
      console.log(password)
      this.router.navigateByUrl("/principal")
    }
   
  }
}
