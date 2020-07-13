import { Injectable } from '@angular/core';
import * as firebase from 'firebase';



@Injectable()
export class AuthService {

  
  constructor() {}

 //permet creer un nouveau  utilisateur
  createNewUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
    
}

//methode permet de connecter un utilisateur existante
signInUser(email: string, password: string) {
  return new Promise(
    (resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password).then(
        () => {
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
    }
  );
}

//methode permet la deconnection de l'utilisateur
signOutUser() {
  firebase.auth().signOut();
}


}
