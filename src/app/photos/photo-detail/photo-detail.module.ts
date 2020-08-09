import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoDetailComponent } from './photo-detail.component';
import { PhotoComponent } from '../photo/photo.component';
import { PhotoModule } from '../photo/photo.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from 'src/app/shared/components/card/vmessage/vmessage.module';
import { PhotoOwnerOnltyDirective } from './directives/photo-owner-onlty.directive';

@NgModule({
  declarations: [
    PhotoDetailComponent,
    PhotoCommentsComponent,
    PhotoOwnerOnltyDirective,
  ],
  exports: [PhotoDetailComponent],
  imports: [
    CommonModule,
    PhotoModule,
    RouterModule,
    ReactiveFormsModule,
    VMessageModule,
  ],
})
export class PhotoDetailModule {}
