import { Component } from '@angular/core';
import { IUsers } from 'src/app/models/user';
import { IWeather } from 'src/app/models/weather';

@Component({
  selector: 'app-saved-users',
  templateUrl: './saved-users.component.html',
  styleUrls: ['./saved-users.component.scss'],
})
export class SavedUsersComponent {
  savedUserData: { user: IUsers; weather: IWeather }[] = [];

  constructor() {}

  ngOnInit(): void {
    const userDataStorage = localStorage.getItem('savedData');
    if (userDataStorage) {
      this.savedUserData = JSON.parse(userDataStorage);
      console.log((this.savedUserData = JSON.parse(userDataStorage)));
    }
  }
}
