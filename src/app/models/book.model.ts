/*pour creer le model des livres */

export class Book {
  [x: string]: any;
    photo: string;
    constructor(public title: string, public author: string) {
        
    }
}