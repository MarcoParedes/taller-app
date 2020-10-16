import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Login } from "src/app/models/login";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    private router: Router) { }

  public logIn(email: string, password: string): Observable<Login> {
    let body = {email, password};
    return this.http.post<Login>(environment.baseURL + 'api/v1/auth/login', body);
  }

  public setToken(token: string): void {
    localStorage.setItem("token", token);
  }

  public getToken(): string {
    return localStorage.getItem("token");
  }

  public isLoggedIn(): boolean {
    return !!this.getToken();
  }

  public logout(): void {
    localStorage.removeItem("token");
    this.router.navigate(['/home']);
  }

}
