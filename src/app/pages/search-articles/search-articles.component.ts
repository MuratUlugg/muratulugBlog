import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-search-articles',
  templateUrl: './search-articles.component.html',
  styleUrls: ['./search-articles.component.css'],
})
export class SearchArticlesComponent implements OnInit {
  page: number = 1;
  articles: Article[] = [];
  totalCount: number = 0;
  pageSize: number = 5;
  loadingItem: number = 5;
  searchText: string;
  ajax;
  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.url.subscribe((params) => {
      if (this.ajax != null) {
        this.ajax.unsubscribe();
      }
      this.articles = [];
      this.totalCount = 0;
      if (this.totalCount > 0) {
        if (this.totalCount >= this.page * this.pageSize) {
          this.loadingItem = 5;
        } else {
          this.loadingItem = this.totalCount - (this.page - 1) * this.pageSize;
        }
      }
      this.articleService.loading = true;
      if (this.route.snapshot.paramMap.get('pageIndex')) {
        this.page = Number(this.route.snapshot.paramMap.get('pageIndex'));
      }
      this.searchText = this.route.snapshot.queryParamMap.get('s');
      this.ajax = this.articleService
        .getArticleSearch(this.searchText, this.page, this.pageSize)
        .subscribe((data) => {
          this.articles = data.articles;
          this.totalCount = data.totalCount;
        });
    });
  }
}
