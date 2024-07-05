import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AngularMaterialModule } from '../../../../angular-material/angular-material.module';

@Component({
  selector: 'app-pastcard4',
  standalone: true,
  imports: [AngularMaterialModule, RouterLink],
  templateUrl: './pastcard4.component.html',
  styleUrl: './pastcard4.component.css'
})
export class Pastcard4Component {
  constructor(private router : Router){}

  @Input()titulo:String="";
  @Input()ingrediente1:String="400 g de espaguetis";
  @Input()ingrediente2:String="150 g de guanciale o bacon";
  @Input()ingrediente3:String="400 g de tomates pelados";
  @Input()ingrediente4:String="100 g de queso Pecorino Romano rallado";

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
