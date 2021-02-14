import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AccountResultModel} from "../models/accountResult.model";
import {IAccountResultDto} from "../models/accountResult.dto";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AccountDataService {

  constructor(
    private http: HttpClient
  ) {
  }

 public getAccountResult(): Observable<AccountResultModel[]> {
  console.log('Works');
  return this.http.get<IAccountResultDto[]>('./assets/jsons/accounts.json')
    .pipe(
      map(results => results.map(result => new AccountResultModel(result)))
    );
}}
