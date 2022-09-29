import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';


export class Todo {

  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date

  ) {

  }
  

}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

   todos:  Todo[]

   message: string
   
  //  [
  //     new Todo(1, 'Learn to Dannce', false, new Date()),
  //     new Todo(2, 'Learn Angular', false, new Date()),    
  //     new Todo(3, 'Learn to ride a bike', false, new Date()),
   //   
  //  ]

  // todo = {
  //   id: 1, description : 'Learn to Dance'
  // }

  constructor(private todoService: TodoDataService,
              private router: Router
    ) { }

  ngOnInit() {
    this.refreshTodo()
  }

  refreshTodo() {
    this.todoService.retrieveAllTodos('in28minutes').subscribe(
      response => {
          console.log(response); 
          this.todos = response;
      }

)


  }


  deleteTodo(id) {
      console.log(`Delelte todo ${id}`)

      this.todoService.deleteTodo('in28minutes', id).subscribe (

        response =>  {
          console.log(response);
          this.message = `Delete Successful ${id}`
          this.refreshTodo()
        }

      )

  }

  updateTodo(id) {
    console.log(`Update todo ${id}`)

    //this.router.navigate(['welcome', id])

    this.router.navigate(['todos', id])

  }


  addTodo() {
  this.router.navigate(['todos', -1])
  }




}
