import { Component } from '@angular/core';
import { TodoService } from '../../todo.service';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-uncomplete',
  templateUrl: './uncomplete.component.html',
  styleUrl: './uncomplete.component.scss'
})
export class UncompleteComponent {
  uncheckedTodos: any[] = [];

  constructor(private todoService: TodoService, private userService: UserService) {
      this.uncheckedTodos = this.todoService.getTodos().filter(todo => !todo.completed);
  }

  toggleTodoStatus(todo: any): void {
    this.todoService.toggleTodoStatus(todo.id);
    this.uncheckedTodos = this.uncheckedTodos.filter(item => item.id !== todo.id);
  }

  getUserName(userId: number): string {
    return this.userService.getUserName(userId);
  }
}
