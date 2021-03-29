import { ListComponent } from './players/list/list.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReportsComponent } from './reports/reports.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './players/details/details.component';
import { CreateComponent } from './players/create/create.component';
import { EditComponent } from './players/edit/edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'players', component: ListComponent },
  { path: 'players/list', component: ListComponent },
  { path: 'players/:playerId/details', component: DetailsComponent },
  { path: 'players/create', component: CreateComponent },
  { path: 'players/:playerId/edit', component: EditComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
