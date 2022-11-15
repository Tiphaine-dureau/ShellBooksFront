import {TestBed} from '@angular/core/testing';
import DoneCallback = jest.DoneCallback;
import {HttpClient} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {of} from "rxjs";
import {BooksService} from "./books.service";
import {Book} from "../model/book";

describe('BooksServices', () => {
  let http: HttpClient;
  let booksService: BooksService;
  // Configure le contexte avant d'exécuter chaque test (it) -> bouchonner le contexte
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        BooksService
      ]
    })
    http = TestBed.inject(HttpClient);
    booksService = TestBed.inject(BooksService);
  })
  // Test : vient tester la méthode getBooks() du bookService
  it('should fetch Books ', function (done: DoneCallback) {
    const booksBusinessModel = [
      {
        "name": "Harry Potter"
      },
      {
        "name": "Le seigneur des anneaux"
      }
    ]
    // bouchonne la réponse du get de l'httpService : getBooks() doit bien appeler le get de l'httpService
    const httpServiceSpy = jest.spyOn(http, 'get').mockReturnValueOnce(of(booksBusinessModel));
    booksService.getBooks().subscribe({
      next: (books: Book[]) => {
        // Vérifie que bookService remonte bien les données du httpService
        expect(books).toEqual(booksBusinessModel);
        // Vérifie que la bonne URL est appellée
        expect(httpServiceSpy).toHaveBeenCalledWith(
          'http://localhost:8080/books'
        );
        done();
      },
    });
  });
});
