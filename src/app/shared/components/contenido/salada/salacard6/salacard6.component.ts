import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AngularMaterialModule } from '../../../../angular-material/angular-material.module';

@Component({
  selector: 'app-salacard6',
  standalone: true,
  imports: [AngularMaterialModule,RouterLink],
  templateUrl: './salacard6.component.html',
  styleUrl: './salacard6.component.css'
})
export class Salacard6Component {

  constructor(private router : Router){}

  @Input()titulo:String="Ensalada de garbanzos y tomates cherry";
  @Input()ingrediente1:String="1 bote de garbanzos en conserva";
  @Input()ingrediente2:String="12 tomates cherry";
  @Input()ingrediente3:String="1 cebolleta";
  @Input()ingrediente4:String="2 huevos (opcional)";
  @Input()ingrediente5:String="1 ajo";

  navigateToPage(){
    this.router.navigate(['/platos'])
  }

  count: number = 0;
  increment(){
    if(this.count < 10){
    this.count++;
    }
  }
  decrement(){
    if(this.count > 0){
    this.count--;
    }
  }
  reset(){
    this.count = 0;
  }



}
