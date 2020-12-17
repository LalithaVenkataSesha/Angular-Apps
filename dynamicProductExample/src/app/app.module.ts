import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { AlertModule } from 'ngx-bootstrap'


import { AppComponent } from './app.component';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';
import { ProductimageComponent } from './productimage/productimage.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductThumbnailComponent,
    ProductimageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule

    // AlertModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
