import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CreateArticleComponent } from './pages/create-article/create-article.component';
import { ArticleDetailsComponent } from './pages/article-details/article-details.component';
import { LibModule } from './lib/lib.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    CreateArticleComponent,
    ArticleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
