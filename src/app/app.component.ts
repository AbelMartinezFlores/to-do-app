import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'toDo Application for SD';

  email: string = 'maria@gmail.com';
  password: string = '123';

  displayName = '';

  constructor(public userService: UserService) {}

  ngOnInit() {
    this.login();
    this.userService.getUser().subscribe(
      user => {this.displayName = user.name}
    )
  }

  login() {
    const user = {email: this.email, password: this.password};
    this.userService.signIn(user).subscribe(
      (loggedUser) => {
        this.userService.setToken(loggedUser.token);
        console.log('Login correcto');
        console.log(loggedUser.token);
      },
      (err) => {
        console.log('Error en el login');
        console.log(err);
      }
    )
  }

}
