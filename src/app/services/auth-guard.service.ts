import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise(
      (resolve, reject) => {
        //
        firebase.auth().onAuthStateChanged(
          (user) => {
            //si user existe il a le droit de passe sur cette route
            if(user) {
              resolve(true);
            } else {
              this.router.navigate(['/auth', 'signin']);
              //il n'a pas le droit acede a cette route
              resolve(false);
            }
          }
        );
      }
    );
  }
}
