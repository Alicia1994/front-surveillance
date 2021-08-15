import { Component, OnInit } from '@angular/core';

import { ViewEncapsulation, ViewChild } from "@angular/core";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);


@Component({
  selector: 'app-swiper',
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
  styleUrls: ['./swiper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class SwiperComponent {}
