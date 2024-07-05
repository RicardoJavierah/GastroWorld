import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';

@Component({
  selector: 'app-pastacard',
  standalone: true,
  imports: [AngularMaterialModule, RouterLink],
  templateUrl: './pastacard.component.html',
  styleUrl: './pastacard.component.css'
})
export class PastacardComponent {

  constructor(private router: Router){}

  @Input()titulo:String="";
  @Input()ingrediente1:String="300 g de canónigos";
  @Input()ingrediente2:String="200 g de queso feta";
  @Input()ingrediente3:String="100 g de nueces peladas";
  @Input()ingrediente4:String="2 peras (opcional)";
  @Input()ingrediente5:String="1 cucharada de miel";

}
