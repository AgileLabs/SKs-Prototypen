import { Injectable } from '@angular/core';

import { Lesson } from './lesson.model';

@Injectable()
export class LessonFilterService {

  constructor() { }

  filter(data: string, properties: Array<string>, originalList: Lesson[]) {
    let filteredList: Lesson[];
    if (data && properties && originalList) {
      data = data.toLowerCase();
      let filtered = originalList.filter(
        item => {
          let match = false;
          for (let property of properties) {
            if (item[property].toString().toLowerCase().indexOf(data) > -1) {
              match = true;
              break;
            }
          };
          return match;
        }
      );
      filteredList = filtered;
    } else {
      filteredList = originalList;
    }
    return filteredList;
  }
}
