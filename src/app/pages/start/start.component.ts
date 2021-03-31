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

  constructor() {}

  public getIndex(kidName: string) {
    if (kidName === 'Róża'){
      this.index = 1;
    }else if (kidName === 'Sara'){
      this.index = 0;
    }
  }

  ngOnInit(): void {

  }
}
