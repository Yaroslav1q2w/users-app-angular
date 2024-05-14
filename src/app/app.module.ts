import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SavedUsersComponent } from './components/saved-users/saved-users.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { MainCardComponent } from './components/main-card/main-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SavedUsersComponent,
    NavigationComponent,
    UserCardComponent,
    MainCardComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
