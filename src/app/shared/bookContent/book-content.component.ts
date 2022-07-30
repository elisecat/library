import { Component, Input, OnInit } from '@angular/core';
import { book } from 'src/app/models/book';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-book-content',
  templateUrl: './book-content.component.html',
  styles: [
  ]
})
export class BookContentComponent implements OnInit {

  @Input('books') books: book | any = [];
  @Input('googleBooks') googlebooks: book | any = [];

  public data: book | any;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    console.log(this.books);
    console.log(this.googlebooks);
    console.log(this.openModal);
  }

  addBook(book:any){
    let books: any = [];
    if (localStorage.getItem("book") != null) {
      books = JSON.parse(localStorage.getItem('book') || '[]');
  }

    books.push(book);
    // this.books;
    // let index = this.googlebooks.findIndex((e:any) => e.id == book.id);
    // this.googlebooks.slice(index, 1);
    localStorage.setItem('book', JSON.stringify(books));
  }


  openModal = false;

  open(value:any) {
    this.openModal=true;
    this.data = value;
  }

}
