import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SliderComponent {

  slider=[
    "../../../../assets/slider/gastroWorld.png",
    "../../../../assets/slider/img1.jpeg",
     "../../../../assets/slider/gastroWorld.png",
    "../../../../assets/slider/img1.jpeg"
  ]


}
