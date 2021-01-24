import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}
  //ReplaySubject is a type of Observable that work like a buffer store inside
  //it values and in any time a subscriber subscribe he can emitt value or multiple
  //valuses from the buffer and here we want just one version of the current
  //user so we detremain the size to 1
  private currentUserSource = new ReplaySubject<User>(1);
  //and here we convert from the replaySubject<User> to Observable<User>
  currentUser$ = this.currentUserSource.asObservable();


  login(model: any){
    return this.http.post(this.baseUrl+'account/login',model).pipe(
      map( (response: User) => {
          const user = response;
          if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            this.currentUserSource.next(user);
          }
        })//map
    );//pipe
  }//fun

  register (model: any){
    return this.http.post(this.baseUrl+ 'account/register',model).pipe(
      map( (user: User) =>{
        if (user) {
          localStorage.setItem('user',JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    );
  }


  setCurrentUser(user : User){
    this.currentUserSource.next(user);
  }

  LogOut () {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }

}
