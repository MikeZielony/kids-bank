import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { BalanceComponent} from './balance/balance.component';
import Speech from 'speak-tts';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  name = 'KiddyBank';
  index: number = null;
  utc = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
  id: number;
  topic: string;
  isAuthPopVisible = false;
  isUserLogin = false;
  loginPictures: ILoginInterface[] = [{id: 'Sara', pic: 'ball.png'}, {id: 'Róża', pic: 'doll.png'}, {id: 'trzy', pic: 'unicorn.png'}];
  kidName: string;
  private balance: BalanceComponent;
  constructor() {
  }

  public getIndex(kidName: string): void {
    this.kidName = kidName;
    this.isAuthPopVisible = true;
    this.speak('Wybierz swój obrazek');
    if (kidName === 'Róża' && this.isUserLogin === false) {
      this.index = 1;
    } else if (kidName === 'Sara') {
      this.index = 0;
    }
  }

  ngOnInit(): void {
    this.loginPictures = this.loginPictures.sort((a, b) => 0.5 - Math.random());
    this.speak('Witamy w KiddyBank');
    this.speak('Kliknij na zdjęcie');
  }

  public speak(message): void {
    const speech = new Speech();
    speech.speak({
      text: message,
    } as SpeechSynthesisUtterance).then(() => {
      console.log('Success !');
    }).catch(e => {
      console.error('An error occurred :', e);
    });
  }

  public setImage(id): void {
    if (id === this.kidName) {
      this.speak('Brawo, poprawny kod');
      this.isAuthPopVisible = false;
      this.isUserLogin = true;
    } else {
      this.speak('To jest zły obrazek');
    }
  }

  public logout(): void {
    this.isUserLogin = false;
    this.isAuthPopVisible = false;
  }
}

export interface ILoginInterface {
  id: string;
  pic: string;
}
