import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuArticleArchiveComponent } from './menu-article-archive.component';

describe('MenuArticleArchiveComponent', () => {
  let component: MenuArticleArchiveComponent;
  let fixture: ComponentFixture<MenuArticleArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuArticleArchiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuArticleArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
