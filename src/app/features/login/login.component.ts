import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { BackgroundComponent } from '../../shared/background/background.component';

@Component({
  selector: 'login',
  standalone: true,
  imports: [CommonModule, BackgroundComponent, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  passwordVisible = false;
  username = '';
  password = '';
  constructor(private router: Router) { }

  onLoginClick() {
    this.router.navigate(['/dashboard/portal']);

  }

  onClickForgotPassword(){
    this.router.navigate(['/recovery']);
  }
}
