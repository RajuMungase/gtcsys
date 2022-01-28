import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outlate',
  templateUrl: './outlate.component.html',
  styleUrls: ['./outlate.component.css']
})
export class OutlateComponent implements OnInit {
  data=[
    {
      name:'Raju',
      mobile:'7066248009',
      age:25
    },{
      name:'Pradip',
      mobile:'7028143227',
      age:23
    },{
      name:'Ram',
      mobile:'9865486258',
      age:30
    },{
      name:'Ram',
      mobile:'9865486258',
      age:30
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }


}
