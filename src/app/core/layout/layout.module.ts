import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { AlertModule } from 'src/app/shared/components/alert/alert.module';
import { LoadingModule } from 'src/app/shared/components/loading/loading.module';
import { MenuModule } from 'src/app/shared/components/menu/menu.module';
import { PhotosDirectivesModule } from 'src/app/photos/photo-detail/directives/photo-directives.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    AlertModule,
    LoadingModule,
    MenuModule,
    PhotosDirectivesModule,
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class LayoutModule {}
