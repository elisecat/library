import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, EventEmitter, Output, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { book } from 'src/app/models/book';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-modal-form-book',
  templateUrl: './modal-form-book.component.html',
  styles: [
  ]
})
export class ModalFormBookComponent implements AfterViewInit, OnInit{

  public formBook: FormGroup | any;

  ngOnInit(): void {
    this.formBook = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      subtitle: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      authors: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
      categories: new FormControl('', Validators.required),
      publishedDate: new FormControl('', Validators.required),
      description: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(2000)]),
    });

    this.formBook.controls['title'].setValue(this.value.volumeInfo.title);
    this.formBook.controls['subtitle'].setValue(this.value.volumeInfo.subtitle);
    this.formBook.controls['authors'].setValue(this.value.volumeInfo.authors);
    this.formBook.controls['categories'].setValue(this.value.volumeInfo.categories);
    this.formBook.controls['publishedDate'].setValue(this.value.volumeInfo.publishedDate);
    this.formBook.controls['description'].setValue(this.value.volumeInfo.description);
  }

  @Input('value') value: book | any;
  @Output() eventCloseModal = new EventEmitter<string>();

  @ViewChild('content') mymodal: ElementRef | any;



  ngAfterViewInit(): void {
    console.log(this.value);
    this.modalService.open(this.mymodal, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }


  closeModal(){

    this.eventCloseModal.emit();
  }

  closeResult = '';

  constructor(private modalService: NgbModal) {}

  editarLibro(){

  }

}



