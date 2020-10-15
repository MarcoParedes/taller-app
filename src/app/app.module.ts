import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { PruebaPipe } from './pipes/prueba.pipe';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { DishesComponent } from './components/home/dishes/dishes.component';
import { LoginComponent } from './components/login/login.component';
import { ReservationsListComponent } from "src/app/components/reservations-list/reservations-list.component";
import { AuthGuard } from "src/app/interceptors/auth.guard";


@NgModule({
  declarations: [
    AppComponent,
    PruebaPipe,
    ToolbarComponent,
    HomeComponent,
    DishesComponent,
    LoginComponent,
    ReservationsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'reservations', component: ReservationsListComponent, canActivate: [AuthGuard] },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
