import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError, throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = 'b56d458cf13fdd11f8d662767367accd';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    return this.http
      .get(`${this.apiUrl}?q=${city}&units=metric&appid=${this.apiKey}`)
      .pipe(
        map((data: any) => ({
          cityName: data.name,
          temperature: data.main.temp,
          condition: data.weather[0].main,
        })),
        catchError((err) => throwError(() => new Error('City not found')))
      );
  }
}
