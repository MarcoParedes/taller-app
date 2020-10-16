import { Component, OnInit, ViewChild } from '@angular/core';
import { ReservationsService } from "src/app/services/reservations.service";
import { Reservation } from "src/app/models/reservation";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: 'app-reservations-list',
  templateUrl: './reservations-list.component.html',
  styleUrls: ['./reservations-list.component.css']
})
export class ReservationsListComponent implements OnInit {

  public displayedColumns: string[] = ["fullName", "date", "email", "guests"];
  public dataSource: MatTableDataSource<Reservation>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private reservationsService: ReservationsService) { 
    this.dataSource = new MatTableDataSource<Reservation>([]);
  }

  ngOnInit(): void {
    this.getReservations();
  }

  public getReservations(): void{
    this.reservationsService.getReservations()
      .subscribe((reservations: Reservation[]) => {
        console.log(reservations);
        this.dataSource = new MatTableDataSource<Reservation>(reservations);
        this.dataSource.paginator = this.paginator;
      })
  }

}
