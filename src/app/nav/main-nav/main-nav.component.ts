import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

enum MainPage {
  home = 1,
  about_me = 2,
  contact = 3,
}
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent implements OnInit {
  pageActive: MainPage;
  constructor(
    private router: Router //Router adında bir router tanımladık.Yapılacak işlem routerdaki her değişikliği takip etmek.
  ) {
    this.router.events.subscribe((x) => {
      if (x instanceof NavigationEnd) {
        // x  navigasyonun bittiği değişken ise
        if (x.url.indexOf('home') > 0) {
          // url home ise
          this.pageActive = MainPage.home;
        } else if (x.url.indexOf('about') > 0) {
          this.pageActive = MainPage.about_me;
        } else if (x.url.indexOf('contact') > 0) {
          this.pageActive = MainPage.contact;
        } else {
          this.pageActive = MainPage.home;
        }
      }
    });
  }

  ngOnInit(): void {}

  search(searchText) {
    if (searchText == '' || searchText == null || searchText == undefined)
      return false;
    this.router.navigateByUrl(`/search/page/1?s=${searchText}`);
  }
}
