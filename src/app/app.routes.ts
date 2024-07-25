import { RouterModule, Routes } from '@angular/router';
import { OnboardingComponent } from './features/onboarding/onboarding.component';
import { LoginComponent } from './features/login/login.component';
import { AccountRecoveryComponent } from './features/account-recovery/account-recovery.component';
import { MainContentComponent } from './features/main-content/main-content.component';
import { CreateShipmentComponent } from './features/create-shipment/create-shipment.component';
import { ShipmentViewComponent } from './features/shipment-view/shipment-view.component';
import { SettingsComponent } from './features/settings/settings.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'onboarding',
        pathMatch: 'full'
    }, { path: 'onboarding/login', component: LoginComponent },
    { path: 'onboarding/recovery', component: AccountRecoveryComponent },
    {
        path: 'onboarding',
        component: OnboardingComponent,
        children: [
            // { path: 'login', component: LoginComponent },
            // { path: 'recovery', component: AccountRecoveryComponent }
        ]
    },
    {
        path: 'dashboard/portal',
        component: MainContentComponent,
        children: [
            // { path: 'portal', component: MainContentComponent },
            // {
            //     path: 'shipments',
            //     children: [
            //         { path: 'shipments/create', component: CreateShipmentComponent },                    // { path: 'view', component: ShipmentViewComponent }
            //     ]
            // },
            // {
            //     path: 'settings',
            //     children: [
            //         { path: 'user', component: SettingsComponent }
            //     ]
            // }
        ]
    },
    { path: 'shipments/view', component: ShipmentViewComponent },
    { path: 'shipments/create', component: CreateShipmentComponent },
    { path: 'settings/user', component: SettingsComponent }



];



