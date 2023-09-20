import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumbergeneratorbackComponent } from './view/numbergeneratorback/numbergeneratorback.component';
import { NumbergeneratordisplayComponent } from './view/numbergeneratordisplay/numbergeneratordisplay.component';
import { ReadynumbersComponent } from './view/readynumbers/readynumbers.component';
import { UserformComponent } from './view/userform/userform.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NumbergeneratorbackComponent,
    NumbergeneratordisplayComponent,
    ReadynumbersComponent,
    UserformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
