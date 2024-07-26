import { Component, OnInit } from '@angular/core';
import { DashboardTemplateComponent } from '../../shared/dashboard-template/dashboard-template.component';
import { ShipmentService } from '../../shipment.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shipment-view',
  standalone: true,
  imports: [DashboardTemplateComponent, CommonModule],
  templateUrl: './shipment-view.component.html',
  styleUrl: './shipment-view.component.css'
})
export class ShipmentViewComponent implements OnInit {
    shipments: any[] = [];
  displayedShipments: any[] = [];
  currentPage = 1;
  itemsPerPage = 5;

  constructor(private shipmentService: ShipmentService) { }

  ngOnInit() {
    this.shipments = this.shipmentService.getShipments();
    this.updateDisplayedShipments();
  }

  updateDisplayedShipments() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedShipments = this.shipments.slice(startIndex, endIndex);
  }

  onPageChange(page: number) {
    if (page < 1 || page > this.totalPages()) {
      return;
    }
    this.currentPage = page;
    this.updateDisplayedShipments();
  }

  onItemsPerPageChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.itemsPerPage = Number(target.value);
    this.currentPage = 1;
    this.updateDisplayedShipments();
  }

  totalPages(): number {
    return Math.ceil(this.shipments.length / this.itemsPerPage);
  }

}
