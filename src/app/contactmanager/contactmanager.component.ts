import { DemoModule } from './../demo/demo.module';
import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contactmanager',
  template: ` <app-sidenav></app-sidenav>`,
  styles: [''],
})
export class ContactmanagerComponent implements OnInit {
  constructor(iconRegistry: MatIconRegistry, saitizer: DomSanitizer) {
    iconRegistry.addSvgIconSet(
      saitizer.bypassSecurityTrustResourceUrl('assets/avatars.svg')
    );
  }

  ngOnInit() {}
}
