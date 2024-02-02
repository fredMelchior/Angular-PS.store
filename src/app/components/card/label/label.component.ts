import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-label',
  standalone: true,
  imports: [],
  templateUrl: './label.component.html',
  styleUrl: './label.component.scss'
})
export class LabelComponent {
	@Input()
	gameLabel:string = ''
}
