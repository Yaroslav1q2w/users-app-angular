import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUsers } from 'src/app/models/user';
import { IWeather } from 'src/app/models/weather';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Input() users: IUsers;
  @Input() weather: IWeather;
  @Input() showSaveButton = true;
  @Output() saveUserClick: EventEmitter<void> = new EventEmitter<void>();

  onSaveUserClick() {
    this.saveUserClick.emit();
  }

  getWeatherIcon(weathercode: number): string {
    switch (weathercode) {
      case 0:
        return '/assets/free-icon-sun-4503058.png';
      case 1:
      case 2:
      case 3:
        return '/assets/free-icon-partly-cloudy-7774417.png';
      case 45:
      case 48:
        return '/assets/free-icon-cloud-4503028.png';
      case 51:
      case 53:
      case 55:
        return '/assets/free-icon-cloudy-3075858.png';
      case 56:
      case 57:
        return '/assets/free-icon-moon-4503037.png';
      case 61:
      case 63:
      case 65:
        return '/assets/free-icon-cloud-4503050.png';
      case 66:
      case 67:
        return '/assets/free-icon-cloud-4503050.png';
      case 71:
      case 73:
      case 75:
        return '/assets/free-icon-snowfall-6277678.png';
      case 77:
        return '/assets/free-icon-snowfall-6277678.png';
      case 80:
      case 81:
      case 82:
        return '/assets/free-icon-cloud-4503021.png';
      case 85:
      case 86:
        return '/assets/free-icon-snowfall-6277678.png';
      case 95:
      case 96:
      case 99:
        return '/assets/free-icon-cloud-4503026.png';
      default:
        return '/assets/free-icon-snowflakes-8237638.png';
    }
  }
}
