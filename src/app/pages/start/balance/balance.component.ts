import { Component, OnInit, Input } from '@angular/core';
import 'firebase/auth';
import 'firebase/database';
import {AngularFireDatabase} from '@angular/fire/database';
import Speech from 'speak-tts';
import { StartComponent} from '../start.component';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  id: any[];
  @Input()
  index;
  private start: StartComponent;

  constructor(db: AngularFireDatabase, start: StartComponent) {
    this.start = start;
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


  public speak1(): void {
    const speech = new Speech();
    speech.speak({
      text: this.id[this.index].name + 'ma na koncie' + this.id[this.index].balance + 'złotych',
    } as SpeechSynthesisUtterance).then(() => {
      console.log('Success !');
    }).catch(e => {
      console.error('An error occurred :', e);
    });
  }
  private logout(): void {
      this.start.logout(); }
}
