import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ReservationsService } from "src/app/services/reservations.service";
import { Reservation } from "src/app/models/reservation";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialogRef } from "@angular/material/dialog";
import { PruebaValidator } from "src/app/validators/prueba.validator";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  public reserveForm: FormGroup;

  constructor(private reservationsService: ReservationsService,
    private snackBar: MatSnackBar,
    private dialog: MatDialogRef<ReservationComponent>) { 
    this.reserveForm = new FormGroup({
      name: new FormControl('', Validators.required),
      date: new FormControl(new Date(), Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      guests: new FormControl('', [Validators.required, Validators.min(2), Validators.max(5)]),
      prueba: new FormControl('', PruebaValidator())
    })

  }

  ngOnInit(): void {
  }

  public save(): void {
    let value = this.reserveForm.value;
    this.reservationsService.saveReservation(value.name, value.date, value.email, value.guests)
      .subscribe((reservation: Reservation) => {
        this.snackBar.open('The reservation was generated', 'ok', {
          duration: 3000
        })
        this.dialog.close();
      })
  }

}
