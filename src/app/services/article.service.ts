import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticlePg } from '../models/article-pg';
import { tap } from 'rxjs/operators';
import { Article } from '../models/article';
import { ArticleArchive } from '../models/article-archive';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private httpClient: HttpClient) {}
  public loading: boolean = true;
  private apiUrl: string = 'https://localhost:44395/api/Articles';

  public getArticlesWithoutPg() {
    return this.httpClient.get<Article[]>(this.apiUrl);
  }

  public getArticle(page: number, pageSize: number) {
    let api = `${this.apiUrl}/${page}/${pageSize}`;
    return this.httpClient.get<ArticlePg>(api).pipe(
      tap((x) => {
        this.loading = false;
      })
    );
  }
  public getArticleId(id: number) {
    let api = `${this.apiUrl}/${id}`;
    return this.httpClient.get<Article>(api).pipe(
      tap((x) => {
        this.loading = false;
      })
    );
  }
  public getArticleWithCategory(id: number, page: number, pageSize: number) {
    let api = `${this.apiUrl}/GetArticleWithCategory/${id}/${page}/${pageSize}`;
    return this.httpClient.get<ArticlePg>(api).pipe(
      tap((x) => {
        this.loading = false;
      })
    );
  }
  public getArticleSearch(searchText: string, page: number, pageSize: number) {
    let api = `${this.apiUrl}/SearchArticle/${searchText}/${page}/${pageSize}`;
    return this.httpClient.get<ArticlePg>(api).pipe(
      tap((x) => {
        this.loading = false;
      })
    );
  }
  public getArticleByMostView() {
    let api = `${this.apiUrl}/GetArticlesByMostView`;
    return this.httpClient.get<Article[]>(api).pipe(
      tap((x) => {
        this.loading = false;
      })
    );
  }
  public getArticlesArchive() {
    let api = `${this.apiUrl}/GetArticlesArchive`;
    return this.httpClient.get<ArticleArchive[]>(api).pipe(
      tap((x) => {
        this.loading = false;
      })
    );
  }
  public getArticleArchiveList(
    year: number,
    month: number,
    page: number,
    pageSize: number
  ) {
    let api = `${this.apiUrl}/GetArticleArchiveList/${year}/${month}/${page}/${pageSize}`;
    return this.httpClient.get<ArticlePg>(api).pipe(
      tap((x) => {
        this.loading = false;
      })
    );
  }
  public articleViewCountUp(id: number) {
    let api = `${this.apiUrl}/ArticleViewCountUp/${id}`;
    return this.httpClient.get(api);
  }
  public saveArticlePicture(image) {
    return this.httpClient.post<any>(
      `${this.apiUrl}/SaveArticlePicture`,
      image
    );
  }
  public addArticle(article: Article) {
    return this.httpClient.post(this.apiUrl, article);
  }
}
