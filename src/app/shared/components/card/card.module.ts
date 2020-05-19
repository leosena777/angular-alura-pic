import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CardComponent],
  exports: [CardComponent, CommonModule],
})
export class CardModule {}
