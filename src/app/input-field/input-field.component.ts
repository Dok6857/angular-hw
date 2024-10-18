import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css'
})
export class InputFieldComponent {
  cityName: string = '';

  @Output() cityAdded = new EventEmitter<string>();

  addCity() {
    if (this.cityName.trim()) {
      this.cityAdded.emit(this.cityName.trim());
      console.log(this.cityName);
      this.cityName = '';
    }
  }
}
