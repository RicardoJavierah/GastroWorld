import { Routes } from '@angular/router';
import { InicioComponent } from './page/principal/inicio/inicio.component';
import { LoginComponent } from './auth/login/login.component';
import { authGuard } from './guards/auth.guard';
import { EnsaladasComponent } from './page/ensaladas/ensaladas.component';
import { PastasComponent } from './page/pastas/pastas.component';

export const routes: Routes = [
    /*{path:"navbar",component:NavbarComponent},
    {path:"slider",component:SliderComponent},
    {path:"sidenav",component:SidenavComponent},*/
    {path: "ensaladas", component: EnsaladasComponent},
    {path: "pastas", component:PastasComponent},
    {
        path:"login",
        component:LoginComponent,
        canActivate:[authGuard]
    },
    {
        path:"principal",
        component:InicioComponent
    },
    {path: "", redirectTo: "login", pathMatch:"full"}
];
