import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() eventCloseModalandSearch = new EventEmitter<string>();

  public data: book | any;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {

  }

  addBook(book:any){
    let books: any = [];
    if (localStorage.getItem("book") != null) {
      books = JSON.parse(localStorage.getItem('book') || '[]');
  }

    books.push(book);
    this.books.push(book);
    let index = this.googlebooks.findIndex((e:any) => e.id == book.id);
    this.googlebooks.splice(index, 1);
    localStorage.setItem('book', JSON.stringify(books));
  }


  openModal = false;

  open(value:any) {
    this.openModal=true;
    this.data = value;
  }
  eventCloseAndSearch(){
    this.openModal = false;
    this.eventCloseModalandSearch.emit()

  }

}
