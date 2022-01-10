import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeroSearchPageRoutingModule } from './hero-search-routing.module';

import { HeroSearchPage } from './hero-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeroSearchPageRoutingModule,
  ],
  declarations: [HeroSearchPage],
  exports: [HeroSearchPage],
})
export class HeroSearchPageModule {}
