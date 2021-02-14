import {Component, OnInit, Output} from '@angular/core';
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
  utc = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
  isTimeForThisComponent: boolean;
  public kid: string;
  balance: number;
  id: number;
  public accountResults: AccountResultModel[] = [];

  constructor(private accountDataService: AccountDataService) {
    this.isTimeForThisComponent = true;

  }

  public myfunction(message: string) {

    let i: number;

    for (i = 0; i < 2; i++) {     // json length ????
      if (message === this.accountResults[i].name) {
        this.balance = this.accountResults[i].balance;
        this.kid = this.accountResults[i].name;
        this.id = i;

      }

    }

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


}
