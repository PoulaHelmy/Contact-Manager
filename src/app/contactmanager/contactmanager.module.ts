import { NewContactDialogComponent } from './components/new-contact-dialog/new-contact-dialog.component';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ContactmanagerComponent } from './contactmanager.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactManagerRoutingModule } from './contactmanager-routing.module';
import { MainContactComponent } from './components/main-contact/main-contact.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './components/notes/notes.component';

@NgModule({
  imports: [
    CommonModule,
    ContactManagerRoutingModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ContactmanagerComponent,
    ToolbarComponent,
    SidenavComponent,
    MainContactComponent,
    NotesComponent,
    NewContactDialogComponent,
  ],
  providers: [UserService, DatePipe],
})
export class ContactmanagerModule {}
