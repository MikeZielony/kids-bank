import { Component, OnInit, Input } from '@angular/core';
import 'firebase/auth';
import 'firebase/database';
import firebase from 'firebase/app';
import {AngularFireDatabase} from '@angular/fire/database';
import Speech from 'speak-tts';

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
  private _init() {
    const speech = new Speech();
    console.log('speak');
    speech.init({
      volume: 0.5,
      lang: 'pl-PL',
      rate: 1,
      pitch: 1.5, }); }

  private speak1() {
    this._init();
    const speech = new Speech();
    speech.speak({
      text: this.id[this.index].name + 'ma na koncie' + this.id[this.index].balance + 'złotych',
    } as SpeechSynthesisUtterance).then(() => {
      console.log('Success !');
    }).catch(e => {
      console.error('An error occurred :', e);
    });
  }
}
