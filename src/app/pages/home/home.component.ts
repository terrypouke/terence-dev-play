import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sb-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  articles: any[];
  constructor() { }

  ngOnInit(): void {
    const localdb = window.localStorage;
    if (localdb.getItem('_articles')) {
      this.articles = JSON.parse(localdb.getItem('_articles')) as any[];
    } else {
      this.articles = [];
    }
  }
}
