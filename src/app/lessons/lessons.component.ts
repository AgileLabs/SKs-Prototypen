import { Component, OnInit } from '@angular/core';

import { Lesson } from './lesson.model';
import { LessonFilterService } from './lesson-filter.service';

@Component({
  selector: 'skp-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})

export class LessonsComponent implements OnInit {

  private lessonsDatabase = [
    { description : '1 - Berufe', done : 4, goal : 5 },
    { description : '2 - Wohnen', done : 5, goal : 3 },
    { description : '3 - Tourismus', done : 0, goal : 4 }
  ];

  filteredLessons: Lesson[];
  lessons: Lesson[];

  constructor(private lessonFilterService: LessonFilterService) {  }

  filterChanged(filter: string): void {
    this.filteredLessons = this.lessonFilterService.filter(filter, ['description'], this.lessons);
  }

  ngOnInit() {
    this.lessons = this.lessonsDatabase;
    this.filteredLessons = this.lessonsDatabase;
  }
}
