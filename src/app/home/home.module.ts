import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { CardComponent } from './components/card/card.component';
import { SectionComponent } from './components/section/section.component';
import { ISeccionComponent } from './components/iseccion/iseccion.component';

@NgModule({
  declarations: [
    HeroComponent,
    OurServicesComponent,
    CardComponent,
    SectionComponent,
    ISeccionComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeroComponent,
    OurServicesComponent,
    CardComponent,
    SectionComponent,
    ISeccionComponent,
  ],
})
export class HomeModule {}
