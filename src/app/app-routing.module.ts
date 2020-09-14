import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ArticleComponent } from './pages/article/article.component';
import { CategoryArticlesComponent } from './pages/category-articles/category-articles.component';

const routes: Routes =
[
  {
    //www.muratulug.com/
    path:"",
    component:MainLayoutComponent,
    children:
    [
        {
            //www.muratulug.com/
          path:"",
          component:HomeComponent,
        },
        {
          //www.muratulug.com/page/1
          path:"page/:pageIndex",
          component:HomeComponent
        },
        {
          //www.muratulug.com/article/title123/1
          path:"article/:title/:id",
          component:ArticleComponent
        },
        {
          //www.muratulug.com/category/name/1
          path:"category/:name/:id",
          component:CategoryArticlesComponent
        },
        {
          //www.muratulug.com/category/name/1/5/2
          path:"category/:name/:id/page/:pageIndex",
          component:CategoryArticlesComponent
        },
        {
          //www.muratulug.com/about
          path:"about",
          component:AboutMeComponent
        },
        {
          //www.muratulug.com/contact
          path:"contact",
          component:ContactComponent
        }
      ]
  },
  {
    //www.muratulug.com/admin
    path:"admin",
    component:AdminLayoutComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
