import { Component, OnInit } from '@angular/core';
import { findIndex } from 'rxjs';
import { book } from 'src/app/models/book';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public books: book | any;
  public booksBack: book | any;
  public googleBooks: book | any;
  public estado = 1;

  constructor(private bookservice: BookServiceService) { }

  ngOnInit(): void {
  }

  searchBook(value:string){
    this.estado = 1;
    this.books = JSON.parse(localStorage.getItem('book') || '[]');
    this.booksBack = JSON.parse(localStorage.getItem('book') || '[]');


    let text = value.replace(' ','+');

    const inputSearch = (value.toUpperCase()).normalize('NFD').replace(/[\u0300-\u036f]/g,"")
    if(this.booksBack.length > 0){
      var newData = this.booksBack.filter(function(item2:any){
        var name = ((item2.volumeInfo.title).toUpperCase()).normalize('NFD').replace(/[\u0300-\u036f]/g,"")
        var resNameLasT = name.indexOf(inputSearch) > -1
        var res = false
        if(resNameLasT||resNameLasT){
          res = true
        }
        return res;
      })
      this.books = newData;
    }



    this.bookservice.list(text).subscribe(res =>{
      console.log(res);
      this.googleBooks = res.items;
      console.log(this.googleBooks);
      this.booksBack.map((item:any)=>{
        let filter = this.googleBooks.findIndex((e:any)=> e.id == item.id)
        console.log(filter)
        if(filter >= 0 ){
          this.googleBooks.splice(filter,1)
        }
      })
      this.estado = 2;
    })
  }
}
