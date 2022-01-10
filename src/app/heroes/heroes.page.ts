import {
  animate,
  state,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';
import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { BOUNCE_IN, BOUNCE_OUT } from 'angular-bounce';

import { Hero } from '../shared/hero';
import { NestService } from '../shared/nest-service/nest-service.service';

import { AddHeroesPage } from './add-heroes/add-heroes.page';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.page.html',
  styleUrls: ['./heroes.page.scss'],
  animations: [
    trigger('heroState', [
      transition('* => void', [useAnimation(BOUNCE_IN)]),
      // transition('active => inactive', [useAnimation(BOUNCE_OUT)]),
    ]),
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('200ms ease-in', style({ transform: 'translateY(0%)' })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateY(-100%)' })),
      ]),
    ]),
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(1000),
      ]),
      transition('* => void', [
        animate(1000, style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
  // animations: [
  //   trigger('flyInOut', [
  //     state('void', style({ transform: 'translateX(0)' })),
  //     transition('void => *', [
  //       style({ transform: 'translateX(-100%)' }),
  //       animate(2000),
  //     ]),
  //     transition('* => void', [
  //       animate(2000, style({ transform: 'translateX(100%)' })),
  //     ]),
  //   ]),
  // ],
})
export class HeroesPage {
  heroes: Hero[] = [];
  visible: boolean = true;

  constructor(
    private nestService: NestService,
    private modalCtrl: ModalController
  ) {}

  ionViewDidEnter() {
    this.getHeroes();
  }

  getHeroes() {
    this.nestService.getHeroes().subscribe((data) => (this.heroes = data));
  }

  deleteHero(hero: Hero) {
    this.nestService.deleteHero(hero).subscribe(() => this.getHeroes());
  }

  addHero(heroName: string) {
    this.nestService.addHero(heroName).subscribe(() => {
      this.getHeroes();
    });
  }

  async addHeroModal() {
    const modal = await this.modalCtrl.create({
      component: AddHeroesPage,
    });
    modal.onDidDismiss().then(() => this.getHeroes());
    return await modal.present();
  }

  p() {
    this.visible = !this.visible;

    console.log(this.visible);
  }
}
