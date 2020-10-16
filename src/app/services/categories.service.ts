import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Category } from "src/app/models/category";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(environment.baseURL + 'api/v1/categories');
  }

}
