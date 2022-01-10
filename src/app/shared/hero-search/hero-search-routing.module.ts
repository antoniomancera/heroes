import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroSearchPage } from './hero-search.page';

const routes: Routes = [
  {
    path: '',
    component: HeroSearchPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroSearchPageRoutingModule {}
