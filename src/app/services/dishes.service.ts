import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Dish } from "src/app/models/dish";
import { Observable, BehaviorSubject } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DishesService {

  public dishesSubject = new BehaviorSubject<Dish[]>([]);

  constructor(private http: HttpClient) { }

  public getDishes(categoryId: string): Observable<Dish[]> {
    return this.http.get<Dish[]>(environment.baseURL + 'api/v1/dishes?categoryId=' + categoryId);
  }

  public addCart(dish: Dish): void {
    // let dishes = this.dishesSubject.value;
    // dishes.push(dish);
    let dishes = [...this.dishesSubject.value, dish];
    this.dishesSubject.next(dishes);
  }

  public getDishesCart(): Observable<Dish[]> {
    return  this.dishesSubject.asObservable();
  }

}
