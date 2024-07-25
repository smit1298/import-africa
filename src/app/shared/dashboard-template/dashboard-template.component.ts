import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'dashboard-template',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent],
  templateUrl: './dashboard-template.component.html',
  styleUrl: './dashboard-template.component.css'
})
export class DashboardTemplateComponent {

}
