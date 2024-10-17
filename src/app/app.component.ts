import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputFieldComponent } from "./input-field/input-field.component";
import { CityCardComponent } from "./city-card/city-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputFieldComponent, CityCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-hw';
}
