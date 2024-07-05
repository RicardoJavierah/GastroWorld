import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AngularMaterialModule } from '../../../../angular-material/angular-material.module';

@Component({
  selector: 'app-salacard1',
  standalone: true,
  imports: [AngularMaterialModule,RouterLink],
  templateUrl: './salacard1.component.html',
  styleUrl: './salacard1.component.css'
})
export class Salacard1Component {

  constructor(private router : Router){}

  @Input()titulo:String="Ensalada de brotes verdes con feta y nueces";
  @Input()ingrediente1:String="300 g de canónigos";
  @Input()ingrediente2:String="200 g de queso feta";
  @Input()ingrediente3:String="100 g de nueces peladas";
  @Input()ingrediente4:String="2 peras (opcional)";
  @Input()ingrediente5:String="1 cucharada de miel";


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
