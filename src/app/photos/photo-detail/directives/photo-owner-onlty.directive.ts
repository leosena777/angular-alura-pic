import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';
import { IPhoto } from '../../photo/photo.type';
import { UserService } from 'src/app/core/services/user/user.service';

@Directive({
  selector: '[appPhotoOwnerOnlty]',
})
export class PhotoOwnerOnltyDirective implements OnInit {
  @Input() ownedPhoto: IPhoto;
  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe((user) => {
      if (!user || user.id !== this.ownedPhoto.userId) {
        this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
      }
    });
  }
}
