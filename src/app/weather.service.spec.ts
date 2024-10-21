import { TestBed } from '@angular/core/testing';
import { WeatherService } from './weather.service';
import { HttpTestingController } from '@angular/common/http/testing';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpTestingController],
      providers: [WeatherService],
    });
    service = TestBed.inject(WeatherService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch weather data', () => {
    const testWeather = {
      name: 'Sumy',
      main: { temp: 15 },
      weather: [{ main: 'Clouds' }],
    };

    service.getWeather('Sumy').subscribe((data) => {
      expect(data.city).toBe('Sumy');
      expect(data.temperature).toBe(15);
    });

    const req = httpMock.expectOne(
      `${service['API_URL']}?q=Kyiv&units=metric&appid=${service['API_KEY']}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(testWeather);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
