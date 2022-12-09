import {NgModule} from '@angular/core';
import {BooksComponent} from "./features/books/books.component";
import {RouterModule, Routes} from "@angular/router";
import {AddBookFormComponent} from "./features/add-book-form/add-book-form.component";

const routes: Routes = [
  {
    path: '',
    component: BooksComponent
  },
  {
    path: 'admin',
    component: AddBookFormComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
