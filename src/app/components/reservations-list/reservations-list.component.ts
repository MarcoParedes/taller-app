import { Component, OnInit } from '@angular/core';
import { ReservationsService } from "src/app/services/reservations.service";
import { Reservation } from "src/app/models/reservation";

@Component({
  selector: 'app-reservations-list',
  templateUrl: './reservations-list.component.html',
  styleUrls: ['./reservations-list.component.css']
})
export class ReservationsListComponent implements OnInit {

  constructor(private reservationsService: ReservationsService) { }

  ngOnInit(): void {
    this.reservationsService.getReservations()
      .subscribe((reservations: Reservation[]) => {
        console.log(reservations);
      })
  }

}
