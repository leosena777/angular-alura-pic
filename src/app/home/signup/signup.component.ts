import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from 'src/app/core/services/signup/user-not-taken.validator.service';
import { INewUser } from 'src/app/core/services/signup/signup.types';
import { SignupService } from 'src/app/core/services/signup/signup.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/services/platform-detector/platform-detector.service';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [UserNotTakenValidatorService],
})
export class SignupComponent implements OnInit, AfterViewInit {
  signupForm: FormGroup;
  @ViewChild('userEmailInput') userEmailInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private UserNoteTakenValidatorService: UserNotTakenValidatorService,
    private signupService: SignupService,
    private router: Router,
    private platformDetector: PlatformDetectorService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      userName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
          lowerCaseValidator,
        ],
        this.UserNoteTakenValidatorService.checkUserNameTaken(),
      ],
      fullName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14),
        ],
      ],
    });
  }

  ngAfterViewInit(): void {
    if (this.platformDetector.isPlatformBrowser()) {
      this.userEmailInput.nativeElement.focus();
    }
  }

  signUp() {
    const newUser: INewUser = this.signupForm.getRawValue();
    this.signupService.signUp(newUser).subscribe(() => {
      this.router.navigate(['']), (err) => {};
    });
  }
}
