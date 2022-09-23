import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   username = 'in28minutes'
   password = ''
   invalidLogin = false
   invalidMessage = 'Invalid Login'


   //Router Dependency Injection
  constructor(private router: Router,
              public hardcodedAuthenticationService: HardcodedAuthenticationService) {
                
              }


              

  ngOnInit() {
  }

  handleLogin() {
    //console.log(this.username)
    //console.log(this.password)

    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    }
    else {
      this.invalidLogin = true
    }

  }

}
