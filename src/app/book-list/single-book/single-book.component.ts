
import { Component, OnInit } from '@angular/core';
//import { Book } from './models/book.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from "../../services/books.service";
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  //styleUrls: ['./single-book.component.css']
})
export class SingleBookComponent implements OnInit {

  book: Book;

  constructor(private route: ActivatedRoute, 
          private booksService: BooksService,
              private router: Router) {}
//
  ngOnInit() {
    //ici on creer un book vide temporaire
    this.book = new Book('', '');
    const id = this.route.snapshot.params['id'];
    //ici on appelle la methode du service pour permet de recuperer le livre en passant id en argument
    this.booksService.getSingleBook(+id).then(
      //ici un creer un asynbro
      (book: Book) => {
        this.book = book;
      }
    );
  }
//la methode ici c'edst pour le retour en arriere
onBack() {
  this.router.navigate(['/books/new']);
}
}