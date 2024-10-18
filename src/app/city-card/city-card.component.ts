import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-city-card',
  standalone: true,
  imports: [],
  templateUrl: './city-card.component.html',
  styleUrl: './city-card.component.css',
})
export class CityCardComponent {
  @Input() city: any;
  @Output() cityRemoved = new EventEmitter<void>();

  removeCity() {
    this.cityRemoved.emit();
  }
}
