import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesPage } from './heroes.page';

const routes: Routes = [
  {
    path: '',
    component: HeroesPage,
  },
  {
    path: 'hero-details/:id',
    loadChildren: () =>
      import('../hero-details/hero-details.module').then(
        (m) => m.HeroDetailsPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesPageRoutingModule {}
