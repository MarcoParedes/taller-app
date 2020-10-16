import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from "@angular/material/core";
import { MatSliderModule } from '@angular/material/slider';

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from './app.component';
import { PruebaPipe } from './pipes/prueba.pipe';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { DishesComponent } from './components/home/dishes/dishes.component';
import { LoginComponent } from './components/login/login.component';
import { ReservationsListComponent } from "src/app/components/reservations-list/reservations-list.component";
import { AuthGuard } from "src/app/interceptors/auth.guard";
import { InterceptorService } from "src/app/interceptors/interceptor.service";
import { ReservationComponent } from './components/reservation/reservation.component';


@NgModule({
  declarations: [
    AppComponent,
    PruebaPipe,
    ToolbarComponent,
    HomeComponent,
    DishesComponent,
    LoginComponent,
    ReservationsListComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatTableModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'reservations', component: ReservationsListComponent, canActivate: [AuthGuard] },
      { path: 'management', loadChildren: () => import('./modules/management/management.module').then(m => m.ManagementModule) },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]),
    BrowserAnimationsModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es' },
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  entryComponents: [LoginComponent, ReservationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
