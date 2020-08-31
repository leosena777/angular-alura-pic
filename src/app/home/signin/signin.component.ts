import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/services/platform-detector/platform-detector.service';

@Component({
  templateUrl: './signin.component.html',
})
export class SignInComponent implements OnInit, AfterViewInit {
  loginForm: FormGroup;
  fromUrl: string;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetector: PlatformDetectorService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.fromUrl = params.fromUrl;
    });

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
          if (this.fromUrl) {
            this.router.navigateByUrl(this.fromUrl);
          } else {
            this.router.navigate(['user', userName]);
          }
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
