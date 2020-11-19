import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleArchive } from 'src/app/models/article-archive';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-menu-article-archive',
  templateUrl: './menu-article-archive.component.html',
  styleUrls: ['./menu-article-archive.component.css'],
})
export class MenuArticleArchiveComponent implements OnInit {
  archives: ArticleArchive[] = [];
  constructor(
    public articleService: ArticleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.articleService.getArticlesArchive().subscribe(
      (data) => {
        this.archives = data;
      },
      (error) => {
        console.log('Bir hata oluştur' + error); //Hataları görmek için
      }
    );
  }
}
