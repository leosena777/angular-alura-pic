import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class PlatformDetectorService {
  constructor(@Inject(PLATFORM_ID) private platformId: string) {
    console.log('platformId', this.platformId);
  }

  isPlatformBrowser() {
    return isPlatformBrowser(this.platformId);
  }
}
