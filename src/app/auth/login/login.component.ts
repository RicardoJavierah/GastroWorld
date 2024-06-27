import { ChangeDetectionStrategy, Component,inject,signal } from '@angular/core';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';
import { LoginServiceService } from '../../service/login/login-service.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {

  loginService= inject(LoginServiceService)
  hide = true
  
  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }

  handleAuth(usu:HTMLInputElement,password:HTMLInputElement){
    let usuario:String = usu.value
    let pwd:String = password.value

    this.loginService.isAuth(usuario,pwd)
  }
}
