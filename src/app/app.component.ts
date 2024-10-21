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
  errorMessage: string = '';

  constructor(private weatherService: WeatherService) {}

  addCity(cityName: string) {
    this.loading = true;
    this.errorMessage = '';

    this.weatherService.getWeather(cityName).subscribe({
      next: (data) => {
        this.cities.push(data);
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = err.message;
        this.loading = false;
      },
    });
  }

  removeCity(cityName: string) {
    this.cities = this.cities.filter(city => city.city !== cityName);
  }
}
