import { Component } from '@angular/core';
import { DashboardTemplateComponent } from '../../shared/dashboard-template/dashboard-template.component';

@Component({
  selector: 'shipment-view',
  standalone: true,
  imports: [DashboardTemplateComponent],
  templateUrl: './shipment-view.component.html',
  styleUrl: './shipment-view.component.css'
})
export class ShipmentViewComponent {

}
