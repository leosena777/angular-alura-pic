import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImmadiateClickDirective } from './immadiate-click.directive';

@NgModule({
  declarations: [ImmadiateClickDirective],
  imports: [CommonModule],
  exports: [ImmadiateClickDirective],
})
export class ImmediateClickModule {}
