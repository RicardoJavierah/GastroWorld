import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appsetting } from '../../settings/appsetting';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { usuarioInterface } from '../../models/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  api = appsetting.apiURL;
  router = inject(Router)

  constructor(private httpClient:HttpClient) { 



  }

createUsuario(usuarioInterface:usuarioInterface):Observable<any>{
  return this.httpClient.post(this.api+"/user/registrar",usuarioInterface);
}

}
