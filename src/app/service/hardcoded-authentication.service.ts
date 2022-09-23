import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    console.log('before ' + this.isuserloggedIn())

    if (username == 'in28minutes' && password == 'dummy') {
      sessionStorage.setItem('authenticatedUser', username);
      console.log('after ' + this.isuserloggedIn())

      return true;
    }
 
    return false;

  }

  isuserloggedIn() {
    let user = sessionStorage.getItem('authenticatedUser') 

    return !(user == null)


  }

  logout() {
    sessionStorage.removeItem('authenticatedUser')
  }


}
