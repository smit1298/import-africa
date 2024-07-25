import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CommonEngine } from '@angular/ssr';

@Component({
  selector: 'profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  name: string = 'Ikechukwu Kalu Emmanuel';
  email: string = 'swaykay.foreveralearner@gmail.com';
  date: string = '06/06/2024';
  savedAddresses: number = 3
  selectedTab: string = 'Details';
  referralLink: string = 'NJH-KJHU';

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }
  getInitials(): string {
    const words = this.name.split(' ');
    if (words.length >= 2) {
      return words[0].charAt(0) + words[1].charAt(0);
    }
    return '';
  }


  copyReferralLink(inputElement: HTMLInputElement): void {
    navigator.clipboard.writeText(inputElement.value).then(() => {
      alert('Referral link copied: ' + inputElement.value);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }
}
