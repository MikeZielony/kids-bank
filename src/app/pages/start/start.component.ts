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
  name = 'Kids Banka';
  index: number;
  index1: number;
  kidName = '';
  kidBalance = 0;
  utc = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
  isTimeForThisComponent: boolean;
  public kid: string;
  balance: number;
  id: number;
  public accountResults: AccountResultModel[] = [];

  constructor(private accountDataService: AccountDataService) {
    this.isTimeForThisComponent = true;

  }


  ngOnInit(): void {
    this.loadData();

  }

  private loadData(): void {
    this.accountDataService.getAccountResult()
      .pipe(
        take(1)
      )
      .subscribe(results => {
        this.accountResults = results;
      });
  }
  public getBigI(index: number) {
    this.index1 = this.index;
    this.kidName = this.id[index].name;
    this.kidBalance = this.id[index].balance;
    console.log(this.name);
    console.log("dupa");
  }



}
