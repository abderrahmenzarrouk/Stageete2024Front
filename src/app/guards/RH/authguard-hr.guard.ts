import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const userconnect = JSON.parse(localStorage.getItem("userconnect")!);
    
    if ((userconnect && userconnect.userRole && userconnect.userRole.role === "RH")||(userconnect && userconnect.userRole && userconnect.userRole.role === "Admin")) {
      return true;
    } else {
      console.log('User not authorized. Redirecting to login.');
      this.router.navigate(['/access']);
      return false;
    }
  }
}
