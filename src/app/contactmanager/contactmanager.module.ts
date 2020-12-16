import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactmanagerComponent } from './contactmanager.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ContactManagerRoutingModule } from './contactmanager-routing.module';
import { MainContactComponent } from './components/main-contact/main-contact.component';

@NgModule({
  imports: [
    CommonModule,
    ContactManagerRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
  ],
  declarations: [
    ContactmanagerComponent,
    ToolbarComponent,
    SidenavComponent,
    MainContactComponent,
  ],
})
export class ContactmanagerModule {}