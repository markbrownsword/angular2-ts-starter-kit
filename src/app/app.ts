/// <reference path="../typings/angular2/angular2.d.ts" />
import 'zone.js';
import 'reflect-metadata';
import 'es6-shim';

import {Component, View, bootstrap} from 'angular2/angular2';
import { MyService } from './services/sampleService';

@Component({
  selector: 'my-app',
  bindings: [MyService]
})
@View({
  template: `
    <ul>
      <li>{{ appStatus }}</li>
      <li>{{ message }}</li>
    </ul>
  `
})
class MyAppComponent {
  appStatus: string;
  message: string;

  constructor(myService: MyService) {
    this.message = myService.getMessage();
    this.appStatus = 'Application is working.';
  }
}

bootstrap(MyAppComponent);
