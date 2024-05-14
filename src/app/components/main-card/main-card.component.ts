import { Component, Input, OnInit } from '@angular/core';
import { IUsers } from 'src/app/models/user';
import { IWeather } from 'src/app/models/weather';
import { UsersService } from 'src/app/services/users.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss'],
})
export class MainCardComponent implements OnInit {
  @Input() users: IUsers;
  @Input() weather: IWeather;
  @Input() loading = true;

  constructor(
    private usersService: UsersService,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.loading = true;
    this.usersService.getUsers().subscribe((data: any) => {
      this.users = data.results[0];
      this.loading = false;

      this.weatherService
        .getWeather(
          this.users.location.coordinates.latitude,
          this.users.location.coordinates.longitude
        )
        .subscribe((weatherData: IWeather) => {
          this.weather = weatherData;

          console.log(this.weather);
          console.log(this.users);
        });
    });
  }

  saveUser() {
    if (this.weather !== undefined) {
      const userData = {
        user: this.users,
        weather: this.weather,
      };

      const savedDataStorage = localStorage.getItem('savedData');

      const savedData: { user: IUsers; weather: IWeather }[] = savedDataStorage
        ? JSON.parse(savedDataStorage)
        : [];

      savedData.push(userData);
      localStorage.setItem('savedData', JSON.stringify(savedData));

      this.loadData();
    }
  }
}
