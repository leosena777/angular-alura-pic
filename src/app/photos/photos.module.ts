import { NgModule } from '@angular/core';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoModule } from './photo/photo.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { DarkenOnHoverModule } from '../shared/directives/darken-on-hover/darken-on-hover.module';
import { PhotoDetailModule } from './photo-detail/photo-detail.module';

@NgModule({
  imports: [
    PhotoListModule,
    PhotoFormModule,
    PhotoModule,
    PhotoDetailModule,
    DarkenOnHoverModule,
  ],
})
export class PhotosModule {}
