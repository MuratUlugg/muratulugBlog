import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';
import { MyvalidationService } from 'src/app/services/myvalidation.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-article-add',
  templateUrl: './admin-article-add.component.html',
  styleUrls: ['./admin-article-add.component.css'],
})
export class AdminArticleAddComponent implements OnInit {
  fileData: File = null;
  picture: string = null;
  articleForm: FormGroup;
  success: boolean;
  loading: boolean;
  info: string;
  categories: Category[];

  constructor(
    private articleService: ArticleService,
    private categoryService: CategoryService,
    public myvalidationService: MyvalidationService,
    private routers: Router
  ) {}

  ngOnInit(): void {
    this.getCategory();
    this.articleForm = new FormGroup({
      title: new FormControl('', Validators.required),
      contentSummary: new FormControl('', Validators.required),
      contentMain: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      picture: new FormControl(''),
    });
  }

  onSubmit() {
    if (this.articleForm.valid) {
      this.loading = true;
      this.articleService.addArticle(this.articleForm.value).subscribe(
        (result) => {
          this.success = true;
          this.routers.navigateByUrl('/admin/article/list');
        },
        (error) => {
          this.success = false;
          this.info = 'Bir Hata Meydana Geldi';
          console.log(JSON.stringify(error));
        }
      );
    }
  }

  getCategory() {
    this.categoryService.getCategories().subscribe((result) => {
      this.categories = result;
    });
  }

  upload(files) {
    this.fileData = files.target.files[0];
    let formData = new FormData();
    formData.append('picture', this.fileData);
    this.articleService.saveArticlePicture(formData).subscribe((result) => {
      console.log(result.path);
      this.picture = result.path;
      this.articleForm.controls.picture.setValue(this.picture);
    });
  }

  displayCategoryName(category) {
    return category.name;
  }

  get getControls() {
    return this.articleForm.controls;
  }
}
