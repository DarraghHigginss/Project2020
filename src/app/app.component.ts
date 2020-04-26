import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Galway',
      url: '/galway',
      icon: 'paper-plane'
    },
    {
      title: 'Dublin',
      url: '/dublin',
      icon: 'paper-plane'
    },
    {
      title: 'Waterford',
      url: '/waterford',
      icon: 'paper-plane'
    },
    {
      title: 'Donegal',
      url: '/donegal',
      icon: 'paper-plane'
    },
    {
      title: 'Cork',
      url: '/cork',
      icon: 'paper-plane'
    },
    {
      title: 'WestMeath',
      url: '/westmeath',
      icon: 'paper-plane'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router:Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.router.navigateByUrl('home');
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
