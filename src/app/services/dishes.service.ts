import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Dish } from "src/app/models/dish";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DishesService {

  constructor(private http: HttpClient) { }

  public getDishes(categoryId: string): Observable<Dish[]> {
    return this.http.get<Dish[]>('http://restaurant-restapi.herokuapp.com/api/v1/dishes?categoryId=' + categoryId);
  }

}
