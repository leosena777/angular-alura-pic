import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo/photo.service';
import { IPhoto, IPhotoComment } from '../photo/photo.type';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.scss'],
})
export class PhotoDetailComponent implements OnInit {
  photo$: Observable<IPhoto>;
  photoId: number;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(this.photoId);
  }

  remove() {
    this.photoService.removePhoto(this.photoId).subscribe(() => {
      this.router.navigate(['']);
    });
  }
}
