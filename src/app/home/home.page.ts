import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private routes:Router) { }//private consturctor

  ngOnInit() {
    setTimeout(() => {//sets the page to change to the sign in page after 5 seconds
      this.routes.navigateByUrl('/login');
    }, 5000);
  }


}
