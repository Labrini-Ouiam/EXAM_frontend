import { Routes } from '@angular/router';
import {ClientsComponent} from './clients/clients.component';
import {CreditsComponent} from './credits/credits.component';
import {NewClientComponent} from './new-client/new-client.component';

export const routes: Routes = [
  {path :"Clients", component: ClientsComponent},
  {path :"Credit", component: CreditsComponent},
  {path :"new-client", component: NewClientComponent},
];
