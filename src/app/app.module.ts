import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Practical1Component } from './practical1/practical1.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Practical14Component } from './practical14/practical14.component';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    Practical1Component,
    Practical14Component,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
     // Use for [(ngModel)] Control
     FormsModule,
     // Use for *ngFor Control
     CommonModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
