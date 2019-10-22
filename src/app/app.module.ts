import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { GroceryService } from './GroceryService/grocery.service';
import { GroceryDbModel } from './GroceryModel/grocery.model';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [GroceryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
