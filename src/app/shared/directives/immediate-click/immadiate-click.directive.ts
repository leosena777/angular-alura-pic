import { Directive, ElementRef, OnInit } from '@angular/core';
import { PlatformDetectorService } from 'src/app/core/services/platform-detector/platform-detector.service';

@Directive({
  selector: '[immadiateClick]',
})
export class ImmadiateClickDirective implements OnInit {
  constructor(
    private element: ElementRef<any>,
    private platformDetector: PlatformDetectorService
  ) {}

  ngOnInit(): void {
    if (this.platformDetector.isPlatformBrowser()) {
      this.element.nativeElement.click();
    }
  }
}
