import { Component } from '@angular/core';

import 'firebase/auth';
import 'firebase/database';
import firebase from 'firebase/app';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kids-bank';

  constructor() {}
}
