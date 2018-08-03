import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private sd: ScrollDispatcher) {
    // this.sd.scrolled().subscribe(console.log);
  }
}
