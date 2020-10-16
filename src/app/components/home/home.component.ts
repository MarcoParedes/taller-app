import { Component, OnInit } from '@angular/core';
import { CategoriesService } from "src/app/services/categories.service";
import { Category } from "src/app/models/category";
import { Dish } from "src/app/models/dish";
import { MatDialog } from "@angular/material/dialog";
import { ReservationComponent } from "src/app/components/reservation/reservation.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public categoriesList: Category[];
  public categoryId: string;

  constructor(private categoriesService: CategoriesService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    const categorySubs$ = this.categoriesService.getCategories()
      .subscribe((categories: Category[]) => {
        console.log(categories)
        categorySubs$.unsubscribe();
        this.categoriesList = categories;
      })
  }

  public recibirMensaje(dish: Dish): void {
    console.log(dish);
  }

  public OpenForm(): void {
    this.dialog.open(ReservationComponent, { maxWidth: '500px' });
  }

}
