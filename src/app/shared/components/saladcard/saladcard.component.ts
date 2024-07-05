import { Component, Input, input } from '@angular/core';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-saladcard',
  standalone: true,
  imports: [AngularMaterialModule, RouterLink],
  templateUrl: './saladcard.component.html',
  styleUrl: './saladcard.component.css'
})
export class SaladcardComponent {
  constructor(private router: Router){}

  @Input()titulo:String="";
  @Input()ingrediente1:String="";
  @Input()ingrediente2:String="";
  @Input()ingrediente3:String="";
  @Input()ingrediente4:String="";
  @Input()ingrediente5:String="";

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
