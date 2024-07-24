import { Component } from '@angular/core';
import { BackgroundComponent } from '../../shared/background/background.component';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Console } from 'node:console';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [BackgroundComponent, RouterOutlet, CommonModule, RouterModule],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.css'
})
export class OnboardingComponent {
  constructor(private router: Router) { }

  navigateToLogin() {
    console.log("this.router.navigate(['/login']")
      this.router.navigate(['/onboarding/login']);
  }
}
