import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';

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
          //www.muratulug.com/hakkimizda
          path:"hakkimizda",
          component:AboutMeComponent
        },
        {
          //www.muratulug.com/iletisim
          path:"iletisim",
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
