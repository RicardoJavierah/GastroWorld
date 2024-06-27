import { Routes } from '@angular/router';
import { InicioComponent } from './page/principal/inicio/inicio.component';
import { LoginComponent } from './auth/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    /*{path:"navbar",component:NavbarComponent},
    {path:"slider",component:SliderComponent},
    {path:"sidenav",component:SidenavComponent},*/
    {
        path:"login",
        component:LoginComponent,
        canActivate:[authGuard]
    },
    {
        path:"principal",
        component:InicioComponent
    },
];
