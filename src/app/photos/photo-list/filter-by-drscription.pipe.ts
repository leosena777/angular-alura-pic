import { Pipe, PipeTransform } from '@angular/core';
import { IPhoto } from '../photo/photo.type';

@Pipe({
  name: 'filterByDescription',
})
export class FilterByDescription implements PipeTransform {
  transform(photos: IPhoto[], descriptionQuery: string) {
    descriptionQuery = descriptionQuery.trim().toLowerCase();
    if (descriptionQuery) {
      return photos.filter((photo) =>
        photo.description.toLowerCase().includes(descriptionQuery)
      );
    } else {
      return photos;
    }
  }
}
