import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sb-create-article',
  templateUrl: './create-article.component.html',
})
export class CreateArticleComponent implements OnInit {

  articles: any[];
  constructor() { }

  ngOnInit(): void {
    const localdb = window.localStorage;
    if (localdb.getItem('_articles')) {
      this.articles = JSON.parse(localdb.getItem('_articles')) as any[];
    } else {
      this.articles = [];
    }

    console.log(this.articles);
  }

  addArticle(): void {
    const localdb = window.localStorage;
    const count = this.articles.length;
    this.articles.push({
      id: Math.random() * 10,
      name: `Jerry ${count}`,
    });

    localdb.setItem('_articles', JSON.stringify(this.articles));
  }

  getImage(image) {
    return null;
  }

}
