import { Routes } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SliderComponent } from './page/principal/slider/slider.component';
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';

export const routes: Routes = [
    {path:"navbar",component:NavbarComponent},
    {path:"slider",component:SliderComponent},
    {path:"sidenav",component:SidenavComponent}
];
