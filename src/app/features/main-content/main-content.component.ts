import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { DashboardTemplateComponent } from '../../shared/dashboard-template/dashboard-template.component';

@Component({
  selector: 'main-content',
  standalone: true,
  imports: [MatProgressBarModule, MatProgressBarModule,
    MatCardModule, DashboardTemplateComponent],
      templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {
  progressValue = 100;
  savedAddresses = 3;
}
