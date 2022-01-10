import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { Hero } from '../shared/hero';
import { NestService } from '../shared/nest-service/nest-service.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.page.html',
  styleUrls: ['./hero-details.page.scss'],
})
export class HeroDetailsPage implements OnInit {
  id: number;
  editHeroForm = this.formBuilder.group({
    hero: ['', Validators.required],
  });

  constructor(
    private nestService: NestService,
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.getHero();
  }

  getHero(): void {
    this.nestService.getHeroById(this.id).subscribe((data) => {
      this.editHeroForm.get('hero').setValue(data.name);
    });
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(): void {
    const newHero: Hero = { name: this.editHeroForm.value.hero, id: this.id };
    if (this.editHeroForm.value.hero) {
      this.nestService.updateHero(newHero).subscribe((data) => this.goBack());
    }
  }
}
