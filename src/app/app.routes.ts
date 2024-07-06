import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './page/principal/inicio/inicio.component';
import { LoginComponent } from './auth/login/login.component';
import { authGuard } from './guards/auth.guard';
import { EnsaladasComponent } from './page/ensaladas/ensaladas.component';
import { PastasComponent } from './page/pastas/pastas.component';
import { RegistrarComponent } from './auth/registrar/registrar/registrar.component';
import { CarritoCompraComponent } from './page/carrito-compra/carrito-compra.component';
import { PlatosComponent } from './info/platos/platos.component';
import { MesaComponent } from './shared/components/mesa/mesa.component';

export const routes: Routes = [
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"registrarUsuario",
        component:RegistrarComponent
    },
    {
        path:"principal",
        component:InicioComponent,
        canActivate:[authGuard]
    },
    {
        path: "ensaladas", 
        component: EnsaladasComponent,
        canActivate:[authGuard]
    },
    {   path: "pastas",
        component:PastasComponent,
        canActivate:[authGuard]
    },
    {
        path:"carrito",
        component:CarritoCompraComponent
    },   
    {
        path:"mesa",
        component:MesaComponent,
        canActivate:[authGuard]
    },
    {
        path: "**", 
        redirectTo: "login", 
        pathMatch:"full"
    }
];
