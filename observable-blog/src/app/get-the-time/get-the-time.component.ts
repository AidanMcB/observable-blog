import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-get-the-time',
  templateUrl: './get-the-time.component.html',
  styleUrls: ['./get-the-time.component.css']
})
export class GetTheTimeComponent implements OnInit {

  constructor() { 
  }

  time = new Observable<string>(observer => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  currentTime  = '';

  ngOnInit(): void {
    this.time.subscribe(
      data => this.currentTime = data
    )
  }

}
