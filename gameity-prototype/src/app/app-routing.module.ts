import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StatBoardComponent } from './stat-board/stat-board.component';
import { GamesComponent } from './games/games.component';
import { CharitiesComponent } from './charities/charities.component';

const routes: Routes = [
  {path : '/', component: HomeComponent },
  {path : 'charities', component: CharitiesComponent },
  {path : 'games', component: GamesComponent},
  {path : 'stats', component: StatBoardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
