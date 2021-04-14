import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AccountDataService} from '../../services/account-data.service';
import {AccountResultModel} from '../../models/accountResult.model';
import {take} from 'rxjs/operators';


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
  constructor() {
  }

  public getIndex(kidName: string): void {
    this.kidName = kidName;
    this.isAuthPopVisible = true;
    if (kidName === 'Róża' && this.isUserLogin === false) {
      this.index = 1;
    } else if (kidName === 'Sara') {
      this.index = 0;
    }
  }

  ngOnInit(): void {
    this.loginPictures = this.loginPictures.sort((a, b) => 0.5 - Math.random());
  }

  public setImage(id): void {
    if (id === this.kidName) {
      this.isAuthPopVisible = false;
      this.isUserLogin = true;
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
