import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

import { MenuCategoryComponent } from './menu-category/menu-category.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { ArticlesComponent } from './articles/articles.component';
import { UrlformatPipe } from '../pipes/url-format.pipe';

@NgModule({
  declarations: [MenuCategoryComponent, PageTitleComponent, ArticlesComponent,UrlformatPipe],
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule
  ],
  exports:[
    MenuCategoryComponent,PageTitleComponent,ArticlesComponent,UrlformatPipe
  ]
})
export class ComponentsModule { }
