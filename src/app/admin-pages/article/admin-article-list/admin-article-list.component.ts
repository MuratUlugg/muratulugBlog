import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-admin-article-list',
  templateUrl: './admin-article-list.component.html',
  styleUrls: ['./admin-article-list.component.css'],
})
export class AdminArticleListComponent implements OnInit {
  dispayedColumns: string[] = [
    'picture',
    'title',
    'category',
    'publishDate',
    'viewCount',
    'commentCount',
  ];
  dataSource;
  articles: Article[];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.getArticlesWithoutPg().subscribe((data) => {
      //this.articles=data;
      this.dataSource = new MatTableDataSource<Article>(data);
      this.dataSource.paginator = this.paginator;
    });
  }
}
