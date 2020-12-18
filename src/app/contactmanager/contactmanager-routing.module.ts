import { MainContactComponent } from './components/main-contact/main-contact.component';
import { ContactmanagerComponent } from './contactmanager.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ContactmanagerComponent,
    children: [
      { path: ':id', component: MainContactComponent },

      { path: '', component: MainContactComponent },
    ],
  },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactManagerRoutingModule {}
