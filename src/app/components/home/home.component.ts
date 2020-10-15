import { Component, OnInit } from '@angular/core';
import { CategoriesService } from "src/app/services/categories.service";
import { Category } from "src/app/models/category";
import { Dish } from "src/app/models/dish";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public categoriesList: Category[];
  public categoryId: string;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.getCategories()
      .subscribe((categories: Category[]) => {
        console.log(categories)
        this.categoriesList = categories;
      })
  }

  public recibirMensaje(dish: Dish): void {
    console.log(dish);
  }

}
