import { Component, OnInit } from '@angular/core';
import uid  from 'uid';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  myCourse = {
    id: uid(),
    name: ''
  };

  courses = [
    {id: 1, name: 'Laravel'},
    {id: 2, name: 'Symfony'},
    {id: 3, name: 'cakePHP'}
  ];

  image = "https://picsum.photos/200/300";

  constructor() { }

  getMyCourse() {
    return this.myCourse;
  }

  addCourse() {
    this.courses = [...this.courses, this.myCourse];
    this.myCourse = {
      id: uid(),
      name: ''
    };
  }

  destroyCourse(id) {
    
     this.courses = this.courses.filter((course) => course.id !== id);
  }

}
