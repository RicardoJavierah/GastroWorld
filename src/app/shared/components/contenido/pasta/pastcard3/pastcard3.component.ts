import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AngularMaterialModule } from '../../../../angular-material/angular-material.module';

@Component({
  selector: 'app-pastcard3',
  standalone: true,
  imports: [AngularMaterialModule, RouterLink],
  templateUrl: './pastcard3.component.html',
  styleUrl: './pastcard3.component.css'
})
export class Pastcard3Component {
  constructor(private router : Router){}

  @Input()titulo:String="";
  @Input()ingrediente1:String="400 g de harina de trigo";
  @Input()ingrediente2:String="4 huevos grandes";
  @Input()ingrediente3:String="1 cucharada de aceite de oliva";
  @Input()ingrediente4:String="1 pizca de sal";
  @Input()ingrediente5:String="1 cebolla pequeña";


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
