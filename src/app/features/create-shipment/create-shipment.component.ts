import { Component } from '@angular/core';
import { DashboardTemplateComponent } from '../../shared/dashboard-template/dashboard-template.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'create-shipment',
  standalone: true,
  imports: [DashboardTemplateComponent, CommonModule, FormsModule],
  templateUrl: './create-shipment.component.html',
  styleUrl: './create-shipment.component.css'
})
export class CreateShipmentComponent {

  step = 1;
  isModalOpen = false;
  warehouses = ['Warehouse 1', 'Warehouse 2', 'Warehouse 3'];
  deliveryTypes = ['Type 1', 'Type 2', 'Type 3'];
  boxes = [{ id: 0, items: [] }];
  toggleDimensions = false;
  stepTitles = ['Sender', 'Receiver', 'Delivery', 'Boxes'];
  numberOfAddress = 2

  notifications = [
    {
      message: 'Your shipment was successfully booked. Your tracking number...',
      time: 'about 21 hours ago',
    },
    {
      message: 'Your shipment with ID EX-AIES-000001-000021 has just been pa...',
      time: 'about 22 hours ago',
    },
    {
      message: 'Your shipment with ID EX-AIES-000001-000016 has just been pa...',
      time: '2 days ago',
    }
  ];
  clearForm() {
    // Logic to clear the form fields
    const selectElement = document.getElementById('recent-address') as HTMLSelectElement;
    const inputElement = document.getElementById('full-address') as HTMLInputElement;

    if (selectElement) {
      selectElement.selectedIndex = 0;
    }

    if (inputElement) {
      inputElement.value = '';
    }
  }

  nextStep() {
    this.step++;
  }

  previousStep() {
    this.step--;
  }

  onSubmit() {
    if (this.step < 4) {
      this.nextStep();
    } else {
      this.openModal();
      this.submitForm()
    }
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.step = 1

  }

  submitForm() {
    // Handle final form submission
    console.log('Form submitted successfully');
  }

  addBox() {
    const newBoxId = this.boxes.length;
    this.boxes.push({ id: newBoxId, items: [] });
  }

  deleteBox(index: number) {
    this.boxes.splice(index, 1);
  }

  // addItem(boxIndex: number) {
  //   const newItemId = this.boxes[boxIndex].items.length;
  //   this.boxes[boxIndex].items.push({ id: newItemId });
  // }
}
