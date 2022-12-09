import {Component, OnInit} from '@angular/core';
import {BooksService} from "../books/services/books.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-book-form',
  templateUrl: './add-book-form.component.html',
  styleUrls: ['./add-book-form.component.css']
})
export class AddBookFormComponent implements OnInit {
  public addBookForm!: FormGroup;

  constructor(
    private bookService: BooksService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.addBookForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  submit() {
    this.bookService.createBook(this.addBookForm.value)
      .subscribe({
        next: () => {
          // TODO clear form
        },
        error: () => {
          // TODO handle error
        }
      })
  }

}
