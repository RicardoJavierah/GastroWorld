import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './page/principal/inicio/inicio.component';
import { LoginComponent } from './auth/login/login.component';
import { authGuard } from './guards/auth.guard';
import { EnsaladasComponent } from './page/ensaladas/ensaladas.component';
import { PastasComponent } from './page/pastas/pastas.component';
import { RegistrarComponent } from './auth/registrar/registrar/registrar.component';
import { CarritoCompraComponent } from './page/carrito-compra/carrito-compra.component';
import { PlatosComponent } from './info/platos/platos.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { MesaComponent } from './shared/components/mesa/mesa.component';
import { CarneComponent } from './page/carnes/carne/carne.component';
import { PostreComponent } from './page/postre/postre.component';
import { BebidaComponent } from './page/bebida/bebida.component';
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
    {   path: "carnes",
        component:CarneComponent,
        canActivate:[authGuard]
    },
    {   path: "postres",
        component:PostreComponent,
        canActivate:[authGuard]
    },
    {   path: "bebidas",
        component:BebidaComponent,
        canActivate:[authGuard]
    },
    {   path: "sopas",
        component:SopasComponent,
        canActivate:[authGuard]
    },
    {
        path:"carrito",
        component:CarritoCompraComponent,
        canActivate:[authGuard]
    }, 
    {
        path:"mesa",
        component:MesaComponent,
        canActivate:[authGuard]
    },
    {
        path:"NotFound",
        component:NotFoundComponent
    },  
    {
        path: "**", 
        redirectTo: "login", 
        pathMatch:"full"
    },

];
