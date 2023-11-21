import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../Todo';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {

  todos: Todo[]
  constructor() 
  { 
    const localItem = localStorage.getItem("todo")
    this.todos = localItem ? JSON.parse(localItem) : []
  }

  todoAdd(todo: Todo){
    let nextIndex;
    if(this.todos.length>0){
       nextIndex = this.todos[this.todos.length-1].sno + 1
    }
    else{
      nextIndex = 1
    }
    todo['sno'] = nextIndex
    this.todos.push(todo)
    localStorage.setItem("todo", JSON.stringify(this.todos))
  }



  deleteTodo(todo: Todo){
    console.log("deleting Todo");
    let index = this.todos.indexOf(todo)
    this.todos.splice(index, 1)
    localStorage.setItem("todo", JSON.stringify(this.todos))

  }

  ngOnInit(): void {
    
  }
}
