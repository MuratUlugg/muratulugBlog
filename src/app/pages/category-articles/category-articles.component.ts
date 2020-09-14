import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-category-articles',
  templateUrl: './category-articles.component.html',
  styleUrls: ['./category-articles.component.css']
})
export class CategoryArticlesComponent implements OnInit,OnDestroy {
  ngOnDestroy(): void{ //Sayfa geçişlerinde ajax isteklerini iptal etmek için
    if(this.ajax != null) {this.ajax.unsubscribe();}  // İptal et
  }
  page:number=1;
  articles:Article[]=[];
  totalCount:number=0;
  pageSize:number=5;
  loadingItem:number=5;
  ajax;
  categoryId:number;
  constructor(private articleService:ArticleService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    if (this.ajax != null) this.ajax.unsubscribe();
    this.route.paramMap.subscribe(params=>{
      this.articleService.loading= true;
      this.articles=[];
      this.totalCount=0;
      if(params.get("id")){
        this.categoryId=Number(params.get("id"));
      }
      if (params.get("pageIndex"))
      {
        this.page=Number(params.get("pageIndex"));
      }
      this.ajax=this.articleService.getArticleWithCategory(this.categoryId,this.page,this.pageSize).subscribe(data =>{
        this.articles=data.articles;
        this.totalCount=data.totalCount;
      });
    });
  }

}
