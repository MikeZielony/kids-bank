import { Component, OnInit, Input } from '@angular/core';
import 'firebase/auth';
import 'firebase/database';
import firebase from 'firebase/app';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  id: any[];
  @Input()
  index;

  constructor(db: AngularFireDatabase) {
   db.list('/')
     .valueChanges().subscribe(id => {
       this.id = id;
       console.log('lista');
       console.log(this.id);
     });
  }

  ngOnInit(): void {
  }
  getEvent($event: any): void {
    this.index = $event;
  }
}
