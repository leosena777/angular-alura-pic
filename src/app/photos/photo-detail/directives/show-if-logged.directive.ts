import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user/user.service';

@Directive({
  selector: '[appShowIfLogged]',
})
export class ShowIfLoggedDirective implements OnInit {
  currentDisplay: string;
  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.currentDisplay = getComputedStyle(this.element.nativeElement).display;
    this.userService.getUser().subscribe((user) => {
      if (user) {
        this.renderer.setStyle(
          this.element.nativeElement,
          'display',
          this.currentDisplay
        );
      } else {
        this.currentDisplay = getComputedStyle(
          this.element.nativeElement
        ).display;
        this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
      }
    });
  }
}
