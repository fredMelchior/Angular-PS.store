import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [CardComponent, MenuBarComponent]
})
export class HomeComponent {

}
