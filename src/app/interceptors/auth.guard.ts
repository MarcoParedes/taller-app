import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "src/app/services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot){
    
    let isLoggedIn: boolean = this.authService.isLoggedIn();
    if (!isLoggedIn) this.router.navigate(['/home']);
    return isLoggedIn;
  }
  
}
