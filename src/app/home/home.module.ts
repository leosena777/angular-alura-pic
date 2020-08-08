import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/signin.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VMessageModule } from '../shared/components/card/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SignupService } from '../core/services/signup/signup.service';

@NgModule({
  declarations: [SignInComponent, SignupComponent, HomeComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    VMessageModule,
    FormsModule,
    RouterModule,
    HomeRoutingModule,
  ],
  providers: [SignupService],
})
export class HomeModule {}
