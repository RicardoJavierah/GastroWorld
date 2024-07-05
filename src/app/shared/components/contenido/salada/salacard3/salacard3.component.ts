import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AngularMaterialModule } from '../../../../angular-material/angular-material.module';

@Component({
  selector: 'app-salacard3',
  standalone: true,
  imports: [AngularMaterialModule,RouterLink],
  templateUrl: './salacard3.component.html',
  styleUrl: './salacard3.component.css'
})
export class Salacard3Component {

  constructor(private router : Router){}

  @Input()titulo:String="Ensalada de patata y cebolleta con mostaza";
  @Input()ingrediente1:String="400g de patatas pequeñas";
  @Input()ingrediente2:String="1 cebolleta";
  @Input()ingrediente3:String="100 ml de caldo de carne";
  @Input()ingrediente4:String="Cebollino picado";
  @Input()ingrediente5:String="Sal y pimienta";

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
