import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AngularMaterialModule } from '../../../../angular-material/angular-material.module';

@Component({
  selector: 'app-salacard5',
  standalone: true,
  imports: [AngularMaterialModule,RouterLink],
  templateUrl: './salacard5.component.html',
  styleUrl: './salacard5.component.css'
})
export class Salacard5Component {

  constructor(private router : Router){}

  @Input()titulo:String="Carpaccio de calabacín";
  @Input()ingrediente1:String="500 g de calabacín";
  @Input()ingrediente2:String="100 g de queso feta";
  @Input()ingrediente3:String="80 g de nueces";
  @Input()ingrediente4:String="Eneldo fresco";
  @Input()ingrediente5:String="1 limón";

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
