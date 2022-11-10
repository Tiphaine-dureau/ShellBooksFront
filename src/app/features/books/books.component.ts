import { Component, OnInit } from '@angular/core';
import {BooksService} from "./services/books.service";
import {Book} from "./model/book";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public books?: Book[];

  constructor(
    private booksService: BooksService
  ) { }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe((books: Book[]) => {this.books = books});
  }

}
