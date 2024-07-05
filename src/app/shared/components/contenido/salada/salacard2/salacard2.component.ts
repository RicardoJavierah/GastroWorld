import { Component, Input } from '@angular/core';
import { AngularMaterialModule } from '../../../../angular-material/angular-material.module';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-salacard2',
  standalone: true,
  imports: [AngularMaterialModule,RouterLink],
  templateUrl: './salacard2.component.html',
  styleUrl: './salacard2.component.css'
})
export class Salacard2Component {

  constructor(private router : Router){}

  @Input()titulo:String="Ensalada de bulgur y aguacate";
  @Input()ingrediente1:String="1 taza de bulgur";
  @Input()ingrediente2:String="1 tomate";
  @Input()ingrediente3:String="Guindilla seca";
  @Input()ingrediente4:String="1 taza de guisantes";
  @Input()ingrediente5:String="2 aguacates";


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
