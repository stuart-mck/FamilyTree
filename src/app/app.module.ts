import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HistoryComponent } from './history/history.component';
import { TreeComponent } from './tree/tree.component';
import { EventsComponent } from './events/events.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { LoginComponent } from './login/login.component';

//services
import {FamilyTreeService} from './services/family-tree.service';
import {database} from './../model/database/database';
import { EventService } from './services/event.service';

const appRoutes: Routes = [
  { path: 'history', component: HistoryComponent },
  { path: 'tree', component: TreeComponent },
  { path: 'events', component: EventsComponent },
  { path: '', pathMatch: 'full', component: FrontPageComponent },
  { path: 'login',  component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    TreeComponent,
    EventsComponent,
    FrontPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FamilyTreeService, database, EventService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
