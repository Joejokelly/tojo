import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  errorMessage = 'An error occurred, contact support 999-xxx-9999'

  constructor() { }

  ngOnInit() {
  }

}
