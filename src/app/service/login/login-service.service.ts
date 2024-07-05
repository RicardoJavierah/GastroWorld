import { Injectable, inject } from '@angular/core';
import { appsetting } from '../../settings/appsetting';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { credencialesInterface } from '../../auth/credencial.interface';

@Injectable({
  providedIn: 'root'
})

export class LoginServiceService {

  api = appsetting.apiURL
  router = inject(Router)

  constructor(private httpClient:HttpClient) { 

  }

  isAuth(access:boolean,credencial:credencialesInterface){
    if(access){
      this.saveLocalStorage(credencial.correo,credencial.password)
      console.log("todo bien ")
      this.router.navigateByUrl("/principal")
    }else{
      alert("Correo o Contraseña Invalida")
    }
  }

  saveLocalStorage(name:String,password:String){
    let usuario = {
      nameUser:name,
      passwordUser:password
    }
    localStorage.setItem("datos",JSON.stringify(usuario));
  }

  getLocalStorage(){
  let datos = localStorage.getItem("datos")
  if(datos !== null){
    return JSON.parse(datos)
  }else{
    return "failed"
  }

  }

  validacionUserAndPassword(credenciales:credencialesInterface):Observable<any>{
    return this.httpClient.post(this.api+"/validation",credenciales);

  }
}
