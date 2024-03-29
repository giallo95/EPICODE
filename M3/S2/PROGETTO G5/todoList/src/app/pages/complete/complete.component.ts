import { Component } from '@angular/core';
import { TodoService } from '../../todo.service';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrl: './complete.component.scss'
})
export class CompleteComponent {

  checkedTodos: any[] = [];

  constructor(private todoService: TodoService, private userService: UserService) {
      this.checkedTodos = this.todoService.getTodos().filter(todo => todo.completed);
  }

  toggleTodoStatus(todo: any): void {
    this.todoService.toggleTodoStatus(todo.id);
    this.checkedTodos = this.checkedTodos.filter(item => item.id !== todo.id);
  }

  getUserName(userId: number): string {
    return this.userService.getUserName(userId);
  }
}
