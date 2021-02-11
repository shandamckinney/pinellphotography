import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './services/api.service';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AdminNewComponent} from './admin/admin-new/admin-new.component';
import { AdminEditComponent } from './admin/admin-edit/admin-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioModule } from './portfolio/portfolio.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    AdminNewComponent,
    AdminEditComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    IvyCarouselModule,
    PortfolioModule
  ],
  exports: [
    IvyCarouselModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
