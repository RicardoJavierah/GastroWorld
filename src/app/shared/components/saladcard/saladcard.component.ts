import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';

@Component({
  selector: 'app-saladcard',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './saladcard.component.html',
  styleUrl: './saladcard.component.css'
})
export class SaladcardComponent {

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
