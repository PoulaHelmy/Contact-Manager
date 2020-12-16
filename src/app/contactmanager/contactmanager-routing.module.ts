import { MainContactComponent } from './components/main-contact/main-contact.component';
import { ContactmanagerComponent } from './contactmanager.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ContactmanagerComponent,
    children: [{ path: '', component: MainContactComponent }],
  },
  // { path: 'buttons', component: ButtonsComponent },
  // { path: 'flex', component: FlexboxComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactManagerRoutingModule {}
