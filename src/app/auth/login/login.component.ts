import { ChangeDetectionStrategy, Component,inject,signal } from '@angular/core';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';
import { LoginServiceService } from '../../service/login/login-service.service';
import { RouterLink } from '@angular/router';
import { credencialesInterface } from '../credencial.interface';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AngularMaterialModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {

  loginService= inject(LoginServiceService)
  hide = true;

  ngOnInit(){

  }
  
  
  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }

  handleAuth(usu:HTMLInputElement,password:HTMLInputElement){
    let usuario = {
      correo:usu.value,
      password:password.value,
    }

    this.handleValidacionUserAndPassword(usuario)
  }

  handleValidacionUserAndPassword(datos:credencialesInterface){
    this.loginService.validacionUserAndPassword(datos).subscribe({
      next:(result)=>{
        this.loginService.isAuth(result,datos);
      },
      error:(error)=>{
        console.log(error);
      }
    })
  } 


}
