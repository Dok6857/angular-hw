import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputFieldComponent } from './input-field/input-field.component';
import { CityCardComponent } from './city-card/city-card.component';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputFieldComponent, CityCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-hw';

  cities: any[] = [];
  loading: boolean = false;
  error: string | null = null;

  constructor(private weatherService: WeatherService) {}

  onCityAdded(cityName: string) {
    this.loading = true;
    this.error = null;

    this.weatherService.getWeather(cityName).subscribe({
      next: (city) => {
        this.cities.push(city);
        this.loading = false;
      },
      error: (err) => {
        this.error = err.message;
        this.loading = false;
      },
    });
  }
  
  onCityRemoved(i: number) {
    this.cities.splice(i, 1);
  }
}
