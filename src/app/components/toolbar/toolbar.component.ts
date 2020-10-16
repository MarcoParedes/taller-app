import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { LoginComponent } from "src/app/components/login/login.component";
import { AuthService } from "src/app/services/auth.service";
import { DishesService } from "src/app/services/dishes.service";
import { Dish } from "src/app/models/dish";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  title: string = "MyApp";

  public dishesList: Dish[]


  constructor(private dialog: MatDialog, public authService: AuthService,
    private dishesService: DishesService) { }

  ngOnInit(): void {
    this.dishesService.getDishesCart()
      .subscribe((dishes: Dish[]) => {
        console.log(dishes)
        this.dishesList = dishes;
      })
  }

  public Login(): void {
    this.dialog.open(LoginComponent);
  }

  public logout(): void {
    this.authService.logout();
  }

}
