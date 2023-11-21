import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {

  title: string
  description: string
  active: boolean

  @Output() addTodo: EventEmitter<any> = new EventEmitter()
  onSubmit(){
    const todo = {
      title: this.title,
      desc: this.description,
      active: this.active
    }
    console.log(todo, "TTTTTT")
    this.addTodo.emit(todo)
    
  }
}
