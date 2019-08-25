import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';

import {NgxImageCompressService} from 'ngx-image-compress';

import { AppComponent } from './app.component';
import { UploadImageComponent } from './upload-image/upload-image.component';


@NgModule({
  declarations: [
    AppComponent,
    UploadImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [NgxImageCompressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
