import { ChangeDetectionStrategy,Component } from '@angular/core';
import { AngularMaterialModule } from '../../../shared/angular-material/angular-material.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [AngularMaterialModule,RouterLink],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class RegistrarComponent {
  hide = true;
  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }
}
