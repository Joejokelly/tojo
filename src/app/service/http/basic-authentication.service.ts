import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { API_URL } from 'src/app.constants';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  
  constructor(private http:HttpClient ) {}


executeJWTAuthenticationService(username, password) {
    
  return this.http.post<any>(
    `${API_URL}/authenticate`,{
      username,
      password
    }).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticateduser', username);
          sessionStorage.setItem('token', `Bearer ${data.token}`);
          return data;
        }
      )
    );
  //console.log("Execute Hello World Bean Service")
}



  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticateduser')
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser())
     return sessionStorage.getItem('token')
  }

  isuserloggedIn() {
    let user = sessionStorage.getItem('authenticatedUser') 

    return !(user == null)


  }

  logout() {
    sessionStorage.removeItem('authenticatedUser')
    sessionStorage.removeItem('token')
    
  }


}


export class AuthenticationBean {
  constructor(public message:string) {}



}