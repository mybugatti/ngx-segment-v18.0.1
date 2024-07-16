import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SegmentService} from "ngx-segment-analytics";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';

  constructor(private _segment: SegmentService) {
      console.log('AppComponent');
  }
}
