import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'kyc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kyc.component.html',
  styleUrl: './kyc.component.css'
})
export class KycComponent {
  selectedTab: string = 'Individual';
  isPassportUploaded = false;

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }


  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.isPassportUploaded = true;
      // Handle the uploaded file if needed
    }
  }

  onFileDrop(event: DragEvent) {
    event.preventDefault();
    const files = event.dataTransfer?.files;
    if (files && files[0]) {
      this.isPassportUploaded = true;
      // Handle the uploaded file if needed
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  triggerFileInput() {
    const fileInput = document.getElementById('passport-photo') as HTMLInputElement;
    fileInput.click();
  }
}
