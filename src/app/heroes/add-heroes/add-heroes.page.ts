import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ModalController } from '@ionic/angular';

import { NestService } from 'src/app/shared/nest-service/nest-service.service';

@Component({
  selector: 'app-add-heroes',
  templateUrl: './add-heroes.page.html',
  styleUrls: ['./add-heroes.page.scss'],
})
export class AddHeroesPage {
  addHeroForm = this.formBuilder.group({
    hero: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private nestService: NestService,
    private modalCtrl: ModalController
  ) {}

  onSubmit() {
    if (this.addHeroForm.value.hero.trim()) {
      this.nestService.addHero(this.addHeroForm.value.hero).subscribe();
    }
    this.modalCtrl.dismiss();
  }

  goBack() {
    this.modalCtrl.dismiss();
  }
}
