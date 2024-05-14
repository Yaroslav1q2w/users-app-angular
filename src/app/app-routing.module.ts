import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavedUsersComponent } from './components/saved-users/saved-users.component';
import { MainCardComponent } from './components/main-card/main-card.component';

const routes: Routes = [
  { path: '', component: MainCardComponent },
  { path: 'saved', component: SavedUsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
