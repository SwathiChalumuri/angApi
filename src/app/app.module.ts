import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApicompComponent } from './components/apicomp/apicomp.component';
import { HttpClientModule } from '@angular/common/http';
import { ForkjoinconceptComponent } from './components/forkjoinconcept/forkjoinconcept.component';

@NgModule({
  declarations: [
    AppComponent,
    ApicompComponent,
    ForkjoinconceptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
