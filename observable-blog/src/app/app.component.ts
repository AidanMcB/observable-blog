import { Component } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'observable-blog';
  observable = Observable.create((observer) => {
    observer.next('Begin subscription to observer')
    
    setTimeout(() => {
      observer.next('Update in data') 
    }, 3000)

    // setTimeout(() => {
    //   observer.complete()
    // }, 6000)
    
    setTimeout(() => {
      observer.error('Whoopsie!')
    }, 5000)
    
  })

  ngOnInit() {
  this.observable.subscribe(
    data => console.log(data),
    error => console.log(error),
    () => console.log('Subscription finished')
  )
  console.log('Initialization')
  }

}
