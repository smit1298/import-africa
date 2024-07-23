import { Component } from '@angular/core';
import { BackgroundComponent } from '../../shared/background/background.component';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

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
    this.router.navigate(['onboarding/login']);
  }
}
