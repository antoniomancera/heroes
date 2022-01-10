import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeroDetailsPageRoutingModule } from './hero-details-routing.module';
import { HeroDetailsPage } from './hero-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeroDetailsPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [HeroDetailsPage],
})
export class HeroDetailsPageModule {}
