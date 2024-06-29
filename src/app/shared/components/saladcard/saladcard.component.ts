import { Component, Input, input } from '@angular/core';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';

@Component({
  selector: 'app-saladcard',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './saladcard.component.html',
  styleUrl: './saladcard.component.css'
})
export class SaladcardComponent {

  @Input()titulo:String="";
  @Input()ingrediente1:String="";
  @Input()ingrediente2:String="";
  @Input()ingrediente3:String="";
  @Input()ingrediente4:String="";
  @Input()ingrediente5:String="";

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
