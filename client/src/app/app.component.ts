import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users:any;

  //Here is too early to make an http request this is just for construct the component
  //and make sure we have got the Http service available
  //we could do it in the constructor its still work but its too early.
  //The angular come with lifecycle events and after the constructor the event that
  //will take place is knwon as the initiliazation and to use that life cycle event we
  //implement the OnInit interface.
  constructor( private accountService: AccountService) {}

  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser() {
      const user: User = JSON.parse(localStorage.getItem('user'));
      this.accountService.setCurrentUser(user);
  }
}
