import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  imageUrl: string | ArrayBuffer | null = null;
  name: string = 'Ikechukwu Kalu';
  id: string = 'AIES-000001';

  constructor(private router: Router) { }

  navItems = [
    {
      icon: 'M13.5 8.183V4.817q0-.357.234-.587t.58-.23h4.88q.347 0 .576.23t.23.587v3.366q0 .358-.234.587q-.234.23-.58.23h-4.88q-.346 0-.576-.23t-.23-.587M4 11.2V4.8q0-.34.234-.57t.58-.23h4.88q.347 0 .576.23t.23.57v6.4q0 .34-.234.57t-.58.23h-4.88q-.346 0-.576-.23T4 11.2m9.5 8v-6.4q0-.34.234-.57t.58-.23h4.88q.347 0 .576.23t.23.57v6.4q0 .34-.234.57t-.58.23h-4.88q-.346 0-.576-.23t-.23-.57M4 19.183v-3.366q0-.357.234-.587t.58-.23h4.88q.347 0 .576.23t.23.587v3.366q0 .358-.234.587q-.234.23-.58.23h-4.88q-.346 0-.576-.23T4 19.183M5 11h4.5V5H5zm9.5 8H19v-6h-4.5zm0-11H19V5h-4.5zM5 19h4.5v-3H5zm4.5-3',
      link: '/dashboard/portal',
      label: 'Dashboard',
      subNav: [
        { link: '/dashboard/portal', label: 'Home' }
      ], isOpen: false

    },
    {
      icon: 'M7 .5v4m-6.5 0h13v8a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1z M.5 4.5L2 1.61A2 2 0 0 1 3.74.5h6.52a2 2 0 0 1 1.79 1.11L13.5 4.5M7 6.705v4.612m1.75-1.721L7 11.346l-1.75-1.75',
      link: '/shipments',
      label: 'Shipments',
      subNav: [
        { link: '/shipments/create', label: 'Create Shipment' },
        { link: '/shipments/view', label: 'View Shipment' }
      ], isOpen: false

    },
    {
      icon: 'M21.467 38.585h-2.948a2.505 2.505 0 0 1-2.504-2.499v-3.237a13.596 13.596 0 0 1-2.582-1.108l-2.057 2.044c-.961.943-2.589.934-3.536-.011l-2.084-2.097a2.502 2.502 0 0 1 .013-3.534l2.175-2.16a13.704 13.704 0 0 1-.803-2.003H3.909a2.512 2.512 0 0 1-2.5-2.507v-2.949a2.504 2.504 0 0 1 2.5-2.502h3.237a13.48 13.48 0 0 1 1.108-2.577l-2.41-2.434a2.485 2.485 0 0 1-.725-1.775 2.48 2.48 0 0 1 .743-1.762l2.091-2.081c.958-.94 2.597-.93 3.537.012l2.524 2.547c.64-.32 1.313-.59 2.009-.803V3.915c0-1.379 1.122-2.5 2.5-2.5h2.952a2.503 2.503 0 0 1 2.499 2.5v3.238a13.35 13.35 0 0 1 2.098.851L28.62 5.48c.961-.944 2.593-.93 3.536.012l2.08 2.096c.467.467.725 1.096.725 1.77a2.48 2.48 0 0 1-.739 1.766l-2.425 2.41c.435.794.789 1.63 1.055 2.494h3.24a2.503 2.503 0 0 1 2.499 2.5v2.944a2.504 2.504 0 0 1-2.499 2.503h-3.24a13.007 13.007 0 0 1-.853 2.1l2.159 2.174c.466.461.724 1.091.724 1.77c0 .666-.263 1.292-.739 1.764l-2.091 2.082c-.961.943-2.603.925-3.535-.014l-2.041-2.057c-.797.438-1.63.793-2.487 1.058v3.239a2.537 2.537 0 0 1-2.522 2.494m-8.185-8.034l.317.187a12.579 12.579 0 0 0 3.02 1.296l.347.097v3.953c0 .854.697 1.549 1.553 1.549h2.948a1.58 1.58 0 0 0 1.571-1.548v-3.948l.347-.097a12.32 12.32 0 0 0 2.931-1.249l.317-.187l2.557 2.576c.577.582 1.596.592 2.193.007l2.089-2.081c.295-.292.458-.679.458-1.089c0-.423-.158-.812-.445-1.096l-2.657-2.677l.169-.31c.45-.828.799-1.691 1.039-2.563l.097-.349h3.959c.854 0 1.549-.696 1.549-1.552v-2.944c0-.854-.695-1.55-1.549-1.55h-3.958l-.097-.348a12.394 12.394 0 0 0-1.243-2.938l-.186-.318l2.943-2.925c.296-.294.459-.682.459-1.092c0-.42-.159-.81-.448-1.098l-2.08-2.096a1.583 1.583 0 0 0-2.196-.006L26.243 9.17l-.31-.167a12.372 12.372 0 0 0-2.563-1.039l-.348-.097V3.915c0-.854-.695-1.55-1.549-1.55h-2.952c-.854 0-1.549.695-1.549 1.55v3.951l-.348.097c-.87.241-1.703.575-2.478.991l-.313.168l-3.019-3.046c-.581-.58-1.602-.589-2.195-.006L6.53 8.149a1.533 1.533 0 0 0-.461 1.092a1.54 1.54 0 0 0 .45 1.101l2.923 2.953l-.187.315a12.563 12.563 0 0 0-1.296 3.016l-.097.347H3.909c-.854 0-1.549.696-1.549 1.551v2.949c0 .855.695 1.553 1.551 1.556H7.86l.097.348c.232.836.565 1.668.992 2.475l.165.311l-2.674 2.653a1.55 1.55 0 0 0-.009 2.189l2.083 2.096c.588.585 1.599.591 2.195.006z',
      link: '/settings',
      label: 'Settings',
      subNav: [
        { link: '/settings/user', label: 'User Settings' }
      ], isOpen: false

    },

  ];

  onFileSelected(event: Event): void {

    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.imageUrl = reader.result;
      };

      reader.readAsDataURL(file);
    }
  }


  toggleNavItem(navItem: any): void {
    this.navItems.forEach(item => item.isOpen = false);
    navItem.isOpen = !navItem.isOpen;
  }

  navigateRoute(link: string): void {
    // localStorage.setItem('lastVisited', link);
    this.router.navigate([link]);
  }

}
