import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AngularMaterialModule } from '../../../../angular-material/angular-material.module';

@Component({
  selector: 'app-pastcard6',
  standalone: true,
  imports: [AngularMaterialModule, RouterLink],
  templateUrl: './pastcard6.component.html',
  styleUrl: './pastcard6.component.css'
})
export class Pastcard6Component {

  constructor(private router : Router){}

  @Input()titulo:String="";
  @Input()ingrediente1:String="350 g de morcillo";
  @Input()ingrediente2:String="1 hueso o punta de jamón";
  @Input()ingrediente3:String="1 carcasa de pollo";
  @Input()ingrediente4:String="2 zanahorias";
  @Input()ingrediente5:String="2 puerros";


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

