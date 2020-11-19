import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ArticleComponent } from './pages/article/article.component';
import { CategoryArticlesComponent } from './pages/category-articles/category-articles.component';
import { SearchArticlesComponent } from './pages/search-articles/search-articles.component';
import { ArchiveComponent } from './pages/archive/archive.component';
import { AdminHomeComponent } from './admin-pages/admin-home/admin-home.component';
import { AdminArticleComponent } from './admin-pages/article/admin-article/admin-article.component';
import { AdminArticleListComponent } from './admin-pages/article/admin-article-list/admin-article-list.component';
import { AdminArticleUpdateComponent } from './admin-pages/article/admin-article-update/admin-article-update.component';
import { AdminArticleAddComponent } from './admin-pages/article/admin-article-add/admin-article-add.component';

const routes: Routes = [
  {
    //www.muratulug.com/
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        //www.muratulug.com/
        path: '',
        component: HomeComponent,
      },
      {
        //www.muratulug.com/page/1
        path: 'page/:pageIndex',
        component: HomeComponent,
      },
      {
        //www.muratulug.com/article/title123/1
        path: 'article/:title/:id',
        component: ArticleComponent,
      },
      {
        //www.muratulug.com/category/name/1
        path: 'category/:name/:id',
        component: CategoryArticlesComponent,
      },
      {
        //www.muratulug.com/category/name/1/5/2
        path: 'category/:name/:id/page/:pageIndex',
        component: CategoryArticlesComponent,
      },
      {
        //www.muratulug.com/search/1/5
        path: 'search/page/:pageIndex',
        component: SearchArticlesComponent,
      },
      {
        path: 'archive/:year/:month',
        component: ArchiveComponent,
      },
      {
        path: 'archive/:year/:month/page/:pageIndex',
        component: ArchiveComponent,
      },
      {
        //www.muratulug.com/about
        path: 'about',
        component: AboutMeComponent,
      },
      {
        //www.muratulug.com/contact
        path: 'contact',
        component: ContactComponent,
      },
    ],
  },
  {
    //www.muratulug.com/admin
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      //www.muratulug.com/admin/home
      {
        path: '',
        component: AdminHomeComponent,
      },
      {
        path: 'home',
        component: AdminHomeComponent,
      },
      //www.muratulug.com/admin/article
      {
        path: 'article',
        component: AdminArticleComponent,
        children: [
          //www.muratulug.com/admin/list
          {
            path: 'list',
            component: AdminArticleListComponent,
          },
          //www.muratulug.com/admin/article/update/21
          {
            path: 'update/:id',
            component: AdminArticleUpdateComponent,
          },
          //www.muratulug.com/admin/article/add
          {
            path: 'add',
            component: AdminArticleAddComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
