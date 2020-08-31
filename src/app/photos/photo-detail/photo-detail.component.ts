import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo/photo.service';
import { IPhoto, IPhotoComment } from '../photo/photo.type';
import { Observable } from 'rxjs';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { UserService } from 'src/app/core/services/user/user.service';

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
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(this.photoId);
    this.photo$.subscribe(
      () => {},
      (err) => {
        console.log(err);
        this.router.navigate(['not-found']);
      }
    );
  }

  remove() {
    this.photoService.removePhoto(this.photoId).subscribe(
      () => {
        this.alertService.success('Photo removed', true);
        this.router.navigate(['user', this.userService.getUserName()], {
          replaceUrl: true,
        });
      },
      (err) => {
        console.log(err);
        this.alertService.warning('Could not delete the photo', true);
      }
    );
  }

  like(photo: IPhoto) {
    this.photoService.like(photo.id).subscribe((liked) => {
      if (liked) {
        this.photo$ = this.photoService.findById(photo.id);
      }
    });
  }
}
