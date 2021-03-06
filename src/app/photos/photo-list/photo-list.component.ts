import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPhoto } from '../photo/photo.type';
import { debounceTime } from 'rxjs/operators';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit {
  photos: IPhoto[] = [];
  filter = '';
  hasMore = true;
  currentPage = 1;
  userName = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.userName = params.userName;
      this.photos = this.activatedRoute.snapshot.data.photos;
    });
  }

  load() {
    this.photoService
      .listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe((photos) => {
        this.filter = '';
        this.photos = this.photos.concat(photos);
        if (!photos.length) {
          this.hasMore = false;
        }
      });
  }
}
