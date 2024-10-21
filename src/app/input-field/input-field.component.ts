import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css'
})
export class InputFieldComponent {
  cityName: string = '';

  @Output() cityAdded = new EventEmitter<string>();

  onAddCity() {
    if (this.cityName.trim()) {
      this.cityAdded.emit(this.cityName.trim());
      this.cityName = '';
    }
  }
}
