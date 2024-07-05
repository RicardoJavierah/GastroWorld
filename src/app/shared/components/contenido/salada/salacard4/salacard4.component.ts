import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AngularMaterialModule } from '../../../../angular-material/angular-material.module';

@Component({
  selector: 'app-salacard4',
  standalone: true,
  imports: [AngularMaterialModule,RouterLink],
  templateUrl: './salacard4.component.html',
  styleUrl: './salacard4.component.css'
})
export class Salacard4Component {

  constructor(private router : Router){}

  @Input()titulo:String="Ensalada de puerros";
  @Input()ingrediente1:String="4 puerros";
  @Input()ingrediente2:String="8 rabanitos";
  @Input()ingrediente3:String="200 gr de queso fresco";
  @Input()ingrediente4:String="1 cebolleta";
  @Input()ingrediente5:String="aceite de oliva virgen extra";


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
