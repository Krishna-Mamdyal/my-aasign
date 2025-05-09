
import { Component,Input } from '@angular/core';
@Component({
  selector: 'app-player',
  imports: [],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'

})
export class PlayerComponent {

  @Input() name: string = "";   // the data coming from outside is hold by using input decorator.  

}
   
// pass the data from parent to child. 