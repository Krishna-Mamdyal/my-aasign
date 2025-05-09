import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CircleComponent } from './circle/circle.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CircleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})

export class AppComponent {
  title = 'my-assign1';
  
}
