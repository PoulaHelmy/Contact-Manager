import { DemoModule } from './../demo/demo.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactmanager',
  template: ` <app-sidenav></app-sidenav>`,
  styles: [''],
})
export class ContactmanagerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
