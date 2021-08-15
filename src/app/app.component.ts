import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<swiper
  [slidesPerView]="1"
  [spaceBetween]="30"
  [loop]="true"
  [pagination]="{
    clickable: true
  }"
  [navigation]="true"
  class="mySwiper"
>
  <ng-template swiperSlide>Slide 1</ng-template
  ><ng-template swiperSlide>Slide 2</ng-template
  ><ng-template swiperSlide>Slide 3</ng-template
  ><ng-template swiperSlide>Slide 4</ng-template
  ><ng-template swiperSlide>Slide 5</ng-template
  ><ng-template swiperSlide>Slide 6</ng-template
  ><ng-template swiperSlide>Slide 7</ng-template
  ><ng-template swiperSlide>Slide 8</ng-template
  ><ng-template swiperSlide>Slide 9</ng-template>
</swiper>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Surveillance';
}
