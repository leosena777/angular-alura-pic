import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPhoto, IPhotoComment } from './photo.type';
import { TokenService } from 'src/app/core/services/token/token.service';
import { map, catchError } from 'rxjs/operators';
import { of, throwError } from 'rxjs';

const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class PhotoService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  listFromUser(userName: string) {
    return this.http.get<IPhoto[]>(`${API}/${userName}/photos`);
  }

  listFromUserPaginated(userName: string, page: number) {
    const params = new HttpParams().append('page', page.toString());
    return this.http.get<IPhoto[]>(`${API}/${userName}/photos`, { params });
  }

  upload(description: string, allowComments: boolean, file: File) {
    const formData = new FormData();
    formData.append('description', description);
    formData.append('allowComments', allowComments ? 'true' : 'false');
    formData.append('imageFile', file);

    return this.http.post(API + '/photos/upload', formData, {
      observe: 'events',
      reportProgress: true,
    });
  }

  findById(photoId: number) {
    return this.http.get<IPhoto>(`${API}/photos/${photoId}`);
  }

  getComments(photoId: number) {
    return this.http.get<IPhotoComment[]>(`${API}/photos/${photoId}/comments`);
  }

  postComments(photoId: number, commentText: string) {
    return this.http.post<IPhotoComment[]>(
      `${API}/photos/${photoId}/comments`,
      { commentText }
    );
  }

  removePhoto(photoId: number) {
    return this.http.delete(`${API}/photos/${photoId}`);
  }

  like(photoId: number) {
    return this.http
      .post(`${API}/photos/${photoId}/like`, {}, { observe: 'response' })
      .pipe(map(() => true))
      .pipe(
        catchError((err) => {
          if (err.status === '304') {
            return of(false);
          } else {
            return throwError(err);
          }
        })
      );
  }
}
