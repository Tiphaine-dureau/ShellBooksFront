import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BooksComponent} from "./books.component";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {RouterLink} from "@angular/router";


@NgModule({
  declarations: [
    BooksComponent
  ],
  exports: [
    BooksComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    RouterLink,
  ]
})
export class BooksModule {
}
