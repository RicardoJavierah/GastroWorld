import { Component, ViewChild } from '@angular/core';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { RouterOutlet } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { NgIf } from '@angular/common';
import { BreakpointObserver } from '@angular/cdk/layout';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [AngularMaterialModule,RouterOutlet,NgIf,NavbarComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  observer!:BreakpointObserver;

  @ViewChild(MatSidenav,{static:true})
  sidenav!: MatSidenav;
  
  constructor(obs:BreakpointObserver){
    this.observer = obs
  }

  ngOnInit(){
    this.observer.observe(["(max-width:800px)"])
    .subscribe((response)=>{
      if(response.matches){
        this.sidenav.mode = "over";
        this.sidenav.close();
      }else{
        this.sidenav.mode = "side";
        //this.sidenav.open();
      }

    })
  }

  
}
