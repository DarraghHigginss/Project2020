import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //declaring the username and password as strings
  user:string;//username variable
  pass:string;//varuable for password
  
  constructor() { }

  ngOnInit() {
  }

  //logging it to the console for username and password
  signIn(){
    console.log('Username: '+ this.user + 'Password: ' +this.pass)
  }

}
