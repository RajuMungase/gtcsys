import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  StarFiled = new FormControl(null, Validators.required);
  error = '';
  FormSubmitted = false;
  
  submit(){
    this.FormSubmitted = true;
    if(this.StarFiled.status == 'INVALID'){
      this.error = 'Please Rate Me!';
    }else{
      this.error = '';
    }
  }
}
