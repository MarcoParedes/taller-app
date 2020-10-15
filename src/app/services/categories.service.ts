import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Category } from "src/app/models/category";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('http://restaurant-restapi.herokuapp.com/api/v1/categories');
  }

}
