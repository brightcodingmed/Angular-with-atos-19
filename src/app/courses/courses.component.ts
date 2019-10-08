import { Component, OnInit } from '@angular/core';
import uid  from 'uid';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  editable = false;

  myCourse = {
    id: uid(),
    name: '',
    active: false
  };

  courses = [
    {id: 1, name: 'Laravel', active: true},
    {id: 2, name: 'Symfony', active: false},
    {id: 3, name: 'cakePHP', active: true}
  ];

  image = "https://picsum.photos/200/300";

  constructor() { }

  getMyCourse() {
    return this.myCourse;
  }

  addCourse() {
    this.courses = [...this.courses, this.myCourse];
    this.initCourse();
  }

  destroyCourse(id) {
    
     this.courses = this.courses.filter((course) => course.id !== id);
  }

  editCourse(course) {
    this.myCourse = course;
    this.editable = true;
  }

  updateCourse() {
     this.editable = false;
     this.initCourse();
  }

  initCourse() {
    this.myCourse = {
      id: uid(),
      name: '',
      active: false
    };
  }

  toggleCourse(course) {
    course.active = !course.active;
  }

}
