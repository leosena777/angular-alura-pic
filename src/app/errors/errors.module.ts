import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { GlobalErrorHandler } from './global-error-handler/global-error-handler';
import { GlocalErrorComponent } from './glocal-error/glocal-error.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NotFoundComponent, GlocalErrorComponent],
  imports: [CommonModule, RouterModule],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
  ],
  exports: [GlocalErrorComponent],
})
export class ErrorsModule {}
