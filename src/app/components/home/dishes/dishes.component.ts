import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DishesService } from "src/app/services/dishes.service";
import { Dish } from "src/app/models/dish";

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {


  public dishesList: Dish[];
  public loading: boolean = false;

  @Output() public enviarMensaje = new EventEmitter<Dish>();

  private _category: string;
  @Input()
  public set category(value: string) {
    this._category = value;
    if (value) {
      this.loading = true;
      this.dishesService.getDishes(value)
        .subscribe((dishes: Dish[]) => {
          this.loading = false;
          console.log(dishes)
          this.dishesList = dishes;
        })
    }
  }
  public get category(): string {
    return this._category;
  }

  constructor(private dishesService: DishesService) { }

  ngOnInit(): void {
  }


  public enviar(dish: Dish): void {
    this.enviarMensaje.emit(dish);
  }

}
