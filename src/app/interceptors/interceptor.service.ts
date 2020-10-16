import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from "@angular/common/http";
import { AuthService } from "src/app/services/auth.service";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService, private snackbar: MatSnackBar) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    
    const token = this.authService.getToken();
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      })
    }

    return next.handle(req).pipe(catchError((error: HttpErrorResponse) => {

      if (error.status == 403) {
        this.authService.logout();
      }

      this.snackbar.open('un unexpected error ocurred', 'ok', {
        duration: 3000
      })

      return throwError(error);
    }));

  }

}
