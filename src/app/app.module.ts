import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PassDasbordComponent } from './shared/passenger/passenger.module/pass-dasbord/pass-dasbord.component';
import { PassCardComponent } from './shared/passenger/passenger.module/pass-card/pass-card.component';
import { PassCountComponent } from './shared/passenger/passenger.module/pass-count/pass-count.component';
import { MaterialModule } from './shared/material/material.module/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    PassDasbordComponent,
    PassCardComponent,
    PassCountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
