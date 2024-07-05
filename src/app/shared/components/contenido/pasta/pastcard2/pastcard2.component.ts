import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AngularMaterialModule } from '../../../../angular-material/angular-material.module';

@Component({
  selector: 'app-pastcard2',
  standalone: true,
  imports: [AngularMaterialModule,RouterLink],
  templateUrl: './pastcard2.component.html',
  styleUrl: './pastcard2.component.css'
})
export class Pastcard2Component {

  constructor(private router : Router){}

  @Input()titulo:String="";
  @Input()ingrediente1:String="6 placas de lasaña";
  @Input()ingrediente2:String="150 g de gambas";
  @Input()ingrediente3:String="2 manojos de espinacas";
  @Input()ingrediente4:String="100 g de  queso fresco tipo requesón o ricotta.";
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
