import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Book} from "../model/book";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  apiUrl = "http://localhost:8080";

  constructor(
    private http: HttpClient
  ) {
  }

  /*
  ------CRUD METHODS------
  */

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/books`);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.apiUrl}/books`, book);
  }

}
