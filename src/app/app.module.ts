import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlashcomponentComponent } from './flashcomponent/flashcomponent.component';
import { FlashdetailsComponent } from './flashdetails/flashdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    FlashcomponentComponent,
    FlashdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
