import { Routes } from '@angular/router';
import { AddUserComponent } from './user/add-user.component/add-user.component';
import { AllAddress } from './address/all-address/all-address';
import { AddAddress } from './address/add-address/add-address';

export const routes: Routes = [

    { path: '', component: AddUserComponent },
    { path: 'alladdress', component: AllAddress },
    { path: 'addAddress', component: AddAddress },

];
