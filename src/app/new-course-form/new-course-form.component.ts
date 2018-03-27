import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {

  form = new FormGroup({
    topics: new FormArray([])
  });

  addTopic(topic: HTMLInputElement) {
    this.topics.push( new FormControl(topic.value) );
    console.log(this.topics);
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }




}

