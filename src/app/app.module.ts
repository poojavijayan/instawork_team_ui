import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewTeamComponent } from './view-team/view-team.component';
import { UpdateTeamComponent } from './update-team/update-team.component';
import { InsertTeamComponent } from './insert-team/insert-team.component';
import { HttpClientModule } from "@angular/common/http";
import { HttpHelperService } from "./http-helper.service";
@NgModule({
  declarations: [
    AppComponent,
    ViewTeamComponent,
    UpdateTeamComponent,
    InsertTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
