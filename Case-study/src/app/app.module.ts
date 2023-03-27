import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderAppComponent } from './header-app/header-app.component';
import { FooterComponent } from './footer/footer.component';
import { ContanerComponent } from './contaner/contaner.component';
import { ContainerComponent } from './containerFurama/container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderAppComponent,
    FooterComponent,
    ContanerComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
