import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Category } from 'src/app/models/category';
import { ArticleService } from 'src/app/services/article.service';
import * as DeCuopledDocument from '@ckeditor/ckeditor5-build-decoupled-document';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  public Editor = DeCuopledDocument;

  public onReady(editor) {
    editor.isReadOnly = true;
  }
  article: Article;
  category: Category;

  constructor(
    public articleService: ArticleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.articleService.loading = true;
      let id = this.route.snapshot.paramMap.get('id');

      this.articleService.getArticleId(Number(id)).subscribe((data) => {
        this.article = data;
        this.category = data.category;
        this.articleService.articleViewCountUp(this.article.id).subscribe();
      });
    });
  }
}
