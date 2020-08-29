import { NgModule } from '@angular/core';
import { PhotoOwnerOnltyDirective } from './photo-owner-onlty.directive';
import { ShowIfLoggedDirective } from './show-if-logged.directive';
@NgModule({
  declarations: [PhotoOwnerOnltyDirective, ShowIfLoggedDirective],
  exports: [PhotoOwnerOnltyDirective, ShowIfLoggedDirective],
})
export class PhotosDirectivesModule {}
