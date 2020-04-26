import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
user:string;//string value for username in forgot section
  constructor() { }

  ngOnInit() {
  }
forgot(){
  console.log("forgot password: " + this.user)
}
}
