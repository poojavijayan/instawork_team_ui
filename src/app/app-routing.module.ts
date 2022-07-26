import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertTeamComponent } from "./insert-team/insert-team.component";
import { UpdateTeamComponent } from "./update-team/update-team.component";
import {  ViewTeamComponent} from "./view-team/view-team.component";
const routes: Routes = [
  { path: '', component: ViewTeamComponent },
  { path: 'updateTeam', component: UpdateTeamComponent},
  { path: 'viewTeam', component: ViewTeamComponent},
  { path: 'insertTeam', component: InsertTeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
