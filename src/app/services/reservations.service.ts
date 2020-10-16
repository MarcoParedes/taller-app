import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Reservation } from "src/app/models/reservation";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  constructor(private http: HttpClient) { }

  public getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(environment.baseURL +'api/v1/reservations');
  }
  public saveReservation(fullName: string, date: Date, email: string, guests): Observable<Reservation> {
    const body = {fullName, date, email, guests};
    return this.http.post<Reservation>(environment.baseURL +'api/v1/reservations', body);
  }

}
