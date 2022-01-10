import {
  animate,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { BOUNCE_IN, BOUNCE_OUT } from 'angular-bounce';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Hero } from '../hero';
import { NestService } from '../nest-service/nest-service.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.page.html',
  styleUrls: ['./hero-search.page.scss'],
  animations: [
    trigger('heroState', [transition('* <=> void', [useAnimation(BOUNCE_IN)])]),
  ],
})
export class HeroSearchPage implements OnInit {
  heroes!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();
  searching: boolean = false;

  constructor(private nestService: NestService) {}

  search(event: any): void {
    this.searchTerms.next(event.target.value);
    if (event.target.value) {
      this.showSpinner();
    }
  }

  ngOnInit(): void {
    this.heroes = this.searchTerms.pipe(
      debounceTime(2000),
      distinctUntilChanged(),
      switchMap((term: string) => this.nestService.searchHeroes(term))
    );
  }

  showSpinner() {
    this.searching = true;
    setTimeout(() => {
      this.searching = false;
    }, 1999);
  }
}
