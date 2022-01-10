import {
  animate,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';
import { Component } from '@angular/core';

import {
  BOUNCE_IN,
  BOUNCE_OUT,
  FLASH,
  ROTATE_OUT_DOWN_RIGHT,
} from 'angular-bounce';
import { delay } from 'rxjs/operators';
import { Options } from 'selenium-webdriver';
import { __param } from 'tslib';

import { Hero } from '../shared/hero';
import { NestService } from '../shared/nest-service/nest-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
  animations: [
    trigger('heroState', [
      transition('* <=> void', [useAnimation(ROTATE_OUT_DOWN_RIGHT)]),
    ]),
  ],
})
export class DashboardPage {
  heroes: Hero[] = [];

  constructor(private nestService: NestService) {}

  ionViewDidEnter() {
    this.nestService.getHeroes().subscribe((data) => {
      this.heroes = data.slice(0, 4);
      console.log(data);
    });
  }
}
