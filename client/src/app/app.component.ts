import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnyARecord } from 'dns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users:any;
  
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
}
