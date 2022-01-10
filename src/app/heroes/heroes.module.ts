import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeroesPageRoutingModule } from './heroes-routing.module';
import { HeroesPage } from './heroes.page';
import { AddHeroesPageModule } from './add-heroes/add-heroes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeroesPageRoutingModule,
    AddHeroesPageModule,
  ],
  declarations: [HeroesPage],
})
export class HeroesPageModule {}
