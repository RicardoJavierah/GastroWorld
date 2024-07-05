import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AngularMaterialModule } from '../../../../angular-material/angular-material.module';

@Component({
  selector: 'app-pastcard1',
  standalone: true,
  imports: [AngularMaterialModule,RouterLink],
  templateUrl: './pastcard1.component.html',
  styleUrl: './pastcard1.component.css'
})
export class Pastcard1Component {

  constructor(private router : Router){}

  @Input()titulo:String="Ensalada de brotes verdes con feta y nueces";
  @Input()ingrediente1:String="2 huevos";
  @Input()ingrediente2:String="1 diente de ajo picado";
  @Input()ingrediente3:String="1/2 cebolla picada";
  @Input()ingrediente4:String="Sal y pimienta al gusto";
  @Input()ingrediente5:String="Aceite de oliva para freír";


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
