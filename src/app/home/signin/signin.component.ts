import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/services/platform-detector/platform-detector.service';

@Component({
  templateUrl: './signin.component.html',
})
export class SignInComponent implements OnInit, AfterViewInit {
  loginForm: FormGroup;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetector: PlatformDetectorService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngAfterViewInit(): void {
    if (this.platformDetector.isPlatformBrowser()) {
      this.userNameInput.nativeElement.focus();
    }
  }

  login() {
    if (this.loginForm.valid && !this.loginForm.pending) {
      const userName = this.loginForm.get('userName').value;
      const password = this.loginForm.get('password').value;

      this.authService.authenticate(userName, password).subscribe(
        () => {
          this.router.navigate(['user', userName]);
        },
        (err) => {
          console.log(err);
          this.loginForm.reset();
          if (this.platformDetector.isPlatformBrowser()) {
            this.userNameInput.nativeElement.focus();
          }
          alert('Invalid user name or password');
        }
      );
    }
  }
}
