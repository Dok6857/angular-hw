import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, throwError, Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private API_KEY = environment.apiKey;
  private API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const url = `${this.API_URL}?q=${city}&units=metric&appid=${this.API_KEY}`;
    return this.http.get(url).pipe(
      map((data: any) => ({
        city: data.name,
        temperature: data.main.temp,
        condition: data.weather[0].main,
      })),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(
      () => new Error('Місто не знайдено або сталася помилка.')
    );
  }
}
