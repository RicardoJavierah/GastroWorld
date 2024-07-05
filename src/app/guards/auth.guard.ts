import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginServiceService } from '../service/login/login-service.service';

export const authGuard: CanActivateFn = (route, state) => {
  
  const loginService = inject(LoginServiceService);
  const router = inject(Router);

  //condiciones para traer las varibles de localStorage
  let usuario = JSON.stringify(loginService.getLocalStorage().nameUser) !== undefined ? JSON.stringify(loginService.getLocalStorage().nameUser).toString():"";
  let password = JSON.stringify(loginService.getLocalStorage().passwordUser) !== undefined ? JSON.stringify(loginService.getLocalStorage().passwordUser).toString:"";


  //revisamos si el json del localStorage tiene datos para permitir el acceso a las demas rutas
  if(usuario.length > 0  && password.length > 0){
    console.log(JSON.stringify(usuario).length +" " +JSON.stringify(password).length)
    console.log(localStorage.getItem("datos")+"hola")
    return true;
  }else{
    router.navigateByUrl("/login")
    console.log("redirecion")
    return false;
  }



};
