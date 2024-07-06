import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './page/principal/inicio/inicio.component';
import { LoginComponent } from './auth/login/login.component';
//import { authGuard } from './guards/auth.guard';
import { EnsaladasComponent } from './page/ensaladas/ensaladas.component';
import { PastasComponent } from './page/pastas/pastas.component';
import { RegistrarComponent } from './auth/registrar/registrar/registrar.component';
import { CarritoCompraComponent } from './page/carrito-compra/carrito-compra.component';
import { PlatosComponent } from './info/platos/platos.component';
import { CarneComponent } from './page/carnes/carne/carne.component';
import { SopasComponent } from './page/sopas/sopas/sopas.component';

export const routes: Routes = [
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"platos",
        component:PlatosComponent
    },
    {
        path:"sopa",
        component:SopasComponent
    },
    {
        path:"registrarUsuario",
        component:RegistrarComponent
    },
    {
        path:"principal",
        component:InicioComponent,
        //canActivate:[authGuard]
    },
    {
        path: "ensaladas", 
        component: EnsaladasComponent,
        //canActivate:[authGuard]
    },
    {   path: "pastas",
        component:PastasComponent,
        //canActivate:[authGuard]
    },
    {
        path:"carrito",
        component:CarritoCompraComponent
    },   
    {
        path: "**", 
        redirectTo: "login", 
        pathMatch:"full"
    }
];
