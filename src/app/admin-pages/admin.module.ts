import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../modules/material.module';
import { ComponentsModule } from '../components/components.module';

import { AdminLayoutComponent } from '../layout/admin-layout/admin-layout.component';
import { AdminNavComponent } from '../nav/admin-nav/admin-nav.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminArticleComponent } from './article/admin-article/admin-article.component';
import { AdminArticleAddComponent } from './article/admin-article-add/admin-article-add.component';
import { AdminArticleUpdateComponent } from './article/admin-article-update/admin-article-update.component';
import { AdminArticleListComponent } from './article/admin-article-list/admin-article-list.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminNavComponent,
    AdminHomeComponent,
    AdminArticleComponent,
    AdminArticleAddComponent,
    AdminArticleUpdateComponent,
    AdminArticleListComponent,
  ],
  imports: [CommonModule, AppRoutingModule, MaterialModule, ComponentsModule],
})
export class AdminModule {}
