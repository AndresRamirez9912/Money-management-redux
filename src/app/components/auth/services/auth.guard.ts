import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map, take, tap } from 'rxjs';
import { appStateWithAuth, authState } from '../store/auth.state';
import { appState } from 'src/app/store/app.reducer';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  isLogged: boolean = false;
  constructor(private store: Store<appStateWithAuth>, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.select('auth').pipe(
      take(1),
      map((auth) => {
        console.log('Logged::', auth.isLogged);
        if (auth.isLogged) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }
}
