import { ChangeDetectionStrategy,Component, inject } from '@angular/core';
import { AngularMaterialModule } from '../../../shared/angular-material/angular-material.module';
import { Router, RouterLink } from '@angular/router';
import { UsuarioService } from '../../../service/usuario/usuario.service';
import { usuarioInterface } from '../../../models/usuario.interface';
import { LoginServiceService } from '../../../service/login/login-service.service';

@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [AngularMaterialModule,RouterLink],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class RegistrarComponent {

  usuarioService = inject(UsuarioService);
  loginService = inject(LoginServiceService);
  router = inject(Router);


  hide = true;
  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }

  handleRegistrar(nombre:HTMLInputElement,primerApellido:HTMLInputElement,segundoApellido:HTMLInputElement,
    dni:HTMLInputElement,correo:HTMLInputElement,celular:HTMLInputElement,password:HTMLInputElement){

    let usuario={
      nombreUsuario:nombre.value,
      primerApellido:primerApellido.value,
      segundoApellido:segundoApellido.value,
      dni:dni.value,
      correo:correo.value,
      celular:celular.value,
      password:password.value
    };
    
    //validacion
    if (
      !nombre.value ||
      !primerApellido.value ||
      !segundoApellido.value ||
      !dni.value ||
      !correo.value ||
      !celular.value ||
      !password.value
    ) {
      alert('Por favor, completa todos los campos.');
      return;
    }
    //Crea el usuario
    this.createUsuario(usuario);
    //guarda en el localStorage
    this.loginService.saveLocalStorage(usuario.nombreUsuario,usuario.password)
    console.log(usuario);
    this.router.navigateByUrl("/login")
  }


  createUsuario(datos:usuarioInterface){
    this.usuarioService.createUsuario(datos).subscribe({
      next:(result)=>{
        console.log(result)
      }
    })
  }

}
