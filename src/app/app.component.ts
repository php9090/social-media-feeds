import { Component } from '@angular/core';
import { Ng4TwitterTimelineService } from 'ng4-twitter-timeline/lib/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'my-app-new';
  constructor(private ng4TwitterTimelineService: Ng4TwitterTimelineService) {
 
  }
}



 
