import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Book} from "../model/book";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>("http://localhost:8080/books");
  }
}
