import { Component, OnInit } from '@angular/core';
import {AccountDataService} from '../../services/account-data.service';
import {AccountResultModel} from '../../models/accountResult.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public accountResults: AccountResultModel[] = [];
  isTimeForThisComponent: boolean;
  constructor(private accountDataService: AccountDataService) {
 this.isTimeForThisComponent = true;
  }
  ngOnInit(): void {
  }

}
