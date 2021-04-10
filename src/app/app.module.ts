import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReceipeComponent } from './receipe/receipe.component';
import { ReceipeListComponent } from './receipe/receipe-list/receipe-list.component';
import { ReceipeItemComponent } from './receipe/receipe-item/receipe-item.component';
import { ReceipeDetailComponent } from './receipe/receipe-detail/receipe-detail.component';
import { ShoppinggListComponent } from './shoppingg-list/shoppingg-list.component';
import { ShoppingListEditComponent } from './shoppingg-list/shopping-list-edit/shopping-list-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceipeComponent,
    ReceipeListComponent,
    ReceipeItemComponent,
    ReceipeDetailComponent,
    ShoppinggListComponent,
    ShoppingListEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
