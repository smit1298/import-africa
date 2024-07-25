import { Component } from '@angular/core';
import { DashboardTemplateComponent } from '../../shared/dashboard-template/dashboard-template.component';
import { ProfileComponent } from './profile/profile.component';
import { SecurityComponent } from './security/security.component';
import { CommonModule } from '@angular/common';
import { KycComponent } from './kyc/kyc.component';

@Component({
  selector: 'settings',
  standalone: true,
  imports: [DashboardTemplateComponent, ProfileComponent, KycComponent, SecurityComponent, CommonModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  selectedTab: string = 'Profile';

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }
}
