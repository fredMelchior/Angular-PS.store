import { Component, Input } from '@angular/core';
import { LabelComponent } from "./label/label.component";
import { PricingComponent } from "./pricing/pricing.component";

@Component({
    selector: 'app-card',
    standalone: true,
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss',
    imports: [LabelComponent, PricingComponent]
})
export class CardComponent {

	@Input()
	gameCover: string = ''
	@Input()
	gameLabel:string = ''
	@Input()
	gameType: string = ''
	@Input()
	gamePrice: string = ''

}
