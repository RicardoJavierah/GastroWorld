import { Component, Input } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { SliderComponent } from '../../page/principal/slider/slider.component';
import { FoodcardComponent } from '../../shared/components/foodcard/foodcard.component';
import { SaladcardComponent } from '../../shared/components/saladcard/saladcard.component';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { PastacardComponent } from '../../shared/components/pastacard/pastacard.component';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';
import { Pastcard1Component } from '../../shared/components/contenido/pasta/pastcard1/pastcard1.component';

@Component({
  selector: 'app-platos',
  standalone: true,
  imports: [NavbarComponent,Pastcard1Component, SliderComponent, FoodcardComponent, RouterOutlet, PastacardComponent, AngularMaterialModule],
  templateUrl: './platos.component.html',
  styleUrl: './platos.component.css'
})
export class PlatosComponent {
  
  ingrediente1: string | undefined;
  ingrediente2: string | undefined;
  ingrediente3: string | undefined;
  ingrediente4: string | undefined;
  ingrediente5: string | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.ingrediente1 = params['ingrediente1'];
      this.ingrediente2 = params['ingrediente2'];
      this.ingrediente3 = params['ingrediente3'];
      this.ingrediente4 = params['ingrediente4'];
      this.ingrediente5 = params['ingrediente5'];
    });
  }
}
