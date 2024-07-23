import { Router } from '@angular/router';
import { BackgroundComponent } from './../../shared/background/background.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-account-recovery',
  standalone: true,
  imports: [BackgroundComponent],
  templateUrl: './account-recovery.component.html',
  styleUrl: './account-recovery.component.css'
})
export class AccountRecoveryComponent {
  constructor(private router: Router) { }

  onLoginClick() {
    this.router.navigate(['/login']);

  }
}
