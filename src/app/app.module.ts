import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthFormsModule } from './modules/auth-forms/auth-forms.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Auth Form Module
    AuthFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
