import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-pricing',
  standalone: true,
  imports: [],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
	@Input()
	gameType: string = 'DIGITAL PS4'
	@Input()
	gamePrice: string = 'R$399,90'
}
