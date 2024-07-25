import { Component } from '@angular/core';

@Component({
  selector: 'security',
  standalone: true,
  imports: [],
  templateUrl: './security.component.html',
  styleUrl: './security.component.css'
})
export class SecurityComponent {
  referralLink: string = 'KCJZWRIRA4VIYKDC27FYEG2...';

  copyReferralLink(inputElement: HTMLInputElement): void {
    navigator.clipboard.writeText(inputElement.value).then(() => {
      alert('Referral link copied: ' + inputElement.value);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }

  moveToNext(currentElement: HTMLInputElement, nextElement: HTMLInputElement | null): void {
    if (currentElement.value.length === currentElement.maxLength && nextElement) {
      nextElement.focus();
    }
  }
}
