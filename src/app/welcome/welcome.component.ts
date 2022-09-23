import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

  name = ''
  welcomeMessageFromService: string
  //ActivatedRoute
  
  constructor(private route: ActivatedRoute,
              private service: WelcomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
    //console.log(this.route.snapshot.params['name']);

  }

  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldBeanService().subscribe(
        response => this.handleSuccessfulreponse(response)
    );

  }

  
  getWelcomeMessageWithParameter() {
    //console.log(this.service.executeHelloWorldBeanService());
    
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulreponse(response),
      error => this.handleErrorResponse(error)
    );
    
    //console.log('last line of getWelcomeMessage')

    //console.log("get welcome message");
  }


    handleSuccessfulreponse(response) {
        console.log(response);
        console.log(response.message);

        this.welcomeMessageFromService = response.message;

    }
   
    handleErrorResponse(error) {
      //console.log(error);
      //console.log(error.error);
      //console.log(error.error.message);
      this.welcomeMessageFromService = error.error.message
    }
  }
  
  export class Class1 {
  
  }
  
  export class Class2 {
    
  }

    // Access to XMLHttpRequest at 'http://localhost:8080/hello-world/path-variable/in28minutes' 
    // from origin 'http://localhost:4200' 
    // has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resourc
 
    // Access to XMLHttpRequest at 'http://localhost:8080/hello-world/path-variable/in28minutes' 
    // from origin 'http://localhost:4200' has been blocked by CORS policy: 
    // Response to preflight request doesn't pass access control check: It does not have HTTP ok status.
