import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { BaladeListComponent } from './components/balade-list/balade-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CategoriesListComponent,
    HomeComponent,
    HeaderComponent,
    ConnexionComponent,
    InscriptionComponent,
    BaladeListComponent
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
