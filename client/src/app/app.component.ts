import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  constructor(private http: HttpClient) {}
  
  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.http.get("https://localhost:5001/api/users").subscribe(response => {
    this.users = response;
    },error => {
    console.log(error);
    }); 
  }
}
