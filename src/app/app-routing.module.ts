import { NgModule } from '@angular/core';
import {BooksComponent} from "./features/books/books.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: 'books', component: BooksComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
