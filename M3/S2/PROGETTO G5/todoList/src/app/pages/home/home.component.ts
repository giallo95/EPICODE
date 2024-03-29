import { Component } from '@angular/core';
import { TodoService } from '../../todo.service';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

    todos: any[] = [] ;
    users: any[] = [] ;

    constructor(private todoService: TodoService, private userService: UserService) {
        this.todos = this.todoService.getTodos();
        this.users = this.userService.getUsers();}


    toggleTodoStatus(todo: any): void {
      this.todoService.toggleTodoStatus(todo.id);
      this.todos = this.todoService.getTodos()
    }

    getUserName(userId: number): string {
      return this.userService.getUserName(userId);
    }
  }


