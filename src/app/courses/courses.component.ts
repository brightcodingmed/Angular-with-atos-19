import { Component, OnInit } from '@angular/core';
import uid  from 'uid';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  editable = false;
  display = false;
  myCourse = {
    id: uid(),
    name: '',
    active: false,
    vote: {
      like: 0,
      disLike: 0
    }
  };

  courses = [
    {vote: {like: 12, disLike: 2}, id: 1, name: 'Laravel', active: true},
    {vote: {like: 122, disLike: 2}, id: 2, name: 'Symfony', active: false},
    {vote: {like: 14, disLike: 0}, id: 3, name: 'cakePHP', active: true}
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
      active: false,
      vote: {
        like: 0,
        disLike: 0
      }
    };
  }

  toggleCourse(course) {
    course.active = !course.active;
  }

  incLike(course) {
    course.vote.like++;
  }

  incDisLike(course) {
    course.vote.disLike++;
  }

  updateVote(etat, course) {
    if(etat.type) {
      course.vote.like = etat.data;
    }else {
      course.vote.disLike = etat.data;
    }
  }

}
