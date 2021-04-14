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
  loginPictures: ILoginInterface[] = [{id: 'raz', pic: 'kotek.jpg'}, {id: 'dwa', pic: 'kotek.jpg'}, {id: 'trzy', pic: 'kotek.jpg'}];

  constructor() {
  }

  public getIndex(kidName: string): void {
    this.isAuthPopVisible = true;
    if (kidName === 'Róża') {
      this.index = 1;
    } else if (kidName === 'Sara') {
      this.index = 0;
    }
  }

  ngOnInit(): void {
    // this.loginPictures = [...this.loginPictures]

  }
  public setImage(id): void {
    if (id === 'raz') {
      this.isAuthPopVisible = false;
      this.isUserLogin = true;
    }

}
}

export interface ILoginInterface {
  id: string;
  pic: string;
}
