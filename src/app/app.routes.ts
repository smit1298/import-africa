import { Routes } from '@angular/router';
import { OnboardingComponent } from './features/onboarding/onboarding.component';
import { LoginComponent } from './features/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AccountRecoveryComponent } from './features/account-recovery/account-recovery.component';
import { MainContentComponent } from './features/main-content/main-content.component';
import { CreateShipmentComponent } from './features/create-shipment/create-shipment.component';
import { ShipmentViewComponent } from './features/shipment-view/shipment-view.component';
import { SettingsComponent } from './features/settings/settings.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/onboarding',
        pathMatch: 'full'
    },
    {
        path: 'onboarding',
        component: OnboardingComponent,
        data: { title: 'Get Started' },
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'account-recovery', component: AccountRecoveryComponent }
        ]
    },  
    {
        path: 'dashboard',
        component: DashboardComponent,
        data: { title: 'Dashboard' },
        children: [
            { path: '', redirectTo: 'portal', pathMatch: 'full' },
            { path: 'portal', component: MainContentComponent },
            {
                path: 'shipments',
                children: [
                    { path: 'create', component: CreateShipmentComponent },
                    { path: 'view', component: ShipmentViewComponent }
                ]
            },
            {
                path: 'settings',
                children: [
                    { path: 'user', component: SettingsComponent }
                ]
            }
        ]
    },
    { path: '**', redirectTo: '/dashboard/portal' }
];
