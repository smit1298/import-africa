import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'main-content',
  standalone: true,
  imports: [MatProgressBarModule, MatProgressBarModule,
    MatCardModule],
      templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {
  progressValue = 100;
  savedAddresses = 3;
}
