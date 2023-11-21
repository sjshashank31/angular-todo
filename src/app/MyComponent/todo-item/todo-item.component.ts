import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() todoDelete: EventEmitter<any> = new EventEmitter()
  onClick(){

    this.todoDelete.emit(this.todo)

  }
  constructor() { }
  ngOnInit(): void {
    
  }
}
