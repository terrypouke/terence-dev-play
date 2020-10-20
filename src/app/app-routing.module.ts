import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleDetailsComponent } from './pages/article-details/article-details.component';
import { CreateArticleComponent } from './pages/create-article/create-article.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'article/:slugWithId', component: ArticleDetailsComponent },
    { path: 'create', component: CreateArticleComponent },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
