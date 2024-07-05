import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AngularMaterialModule } from '../../../../angular-material/angular-material.module';

@Component({
  selector: 'app-pastcard5',
  standalone: true,
  imports: [AngularMaterialModule, RouterLink],
  templateUrl: './pastcard5.component.html',
  styleUrl: './pastcard5.component.css'
})
export class Pastcard5Component {
  constructor(private router : Router){}

  @Input()titulo:String="";
  @Input()ingrediente1:String="400 g de pasta corta (como penne o rigatoni)";
  @Input()ingrediente2:String="4 tomates maduros";
  @Input()ingrediente3:String="2 berenjenas medianas";
  @Input()ingrediente4:String="2 dientes de ajo";

  
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

