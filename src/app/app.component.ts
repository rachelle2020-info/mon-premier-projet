import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {

  //c'est la relation entre firebase et angular on intere les service farebase a notre appl
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyDUNnRT5KsUcTpeaRhFCN5QlsIDSFn7jio",
      authDomain: "mon-premier-projet-559a2.firebaseapp.com",
      databaseURL: "https://mon-premier-projet-559a2.firebaseio.com",
      projectId: "mon-premier-projet-559a2",
      storageBucket: "mon-premier-projet-559a2.appspot.com",
      messagingSenderId: "715120446825",
      appId: "1:715120446825:web:108d858df86877e72041f8"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
