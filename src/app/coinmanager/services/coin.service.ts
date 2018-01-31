
import { Coin } from 'app/coinmanager/models/coin';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CoinService {
  private _coins: BehaviorSubject<Coin[]>;

  private dataStore :{
    coins: Coin[];
  }
private details;
  constructor(private http: HttpClient) {
    this.dataStore = {coins:[]};
    this.details= this.details || [];
    this._coins = new BehaviorSubject<Coin[]>([]);
   }
 get coins(): Observable<Coin[]>{
   return this._coins.asObservable();
 }

 coinById(id:number){
   return this.dataStore.coins.find(x=>x.id == id);
 }

 loadCoinDetail(names){
  const coinDetailUrl ='https://min-api.cryptocompare.com/data/all/coinlist';
  return this.http.get(coinDetailUrl)
  .subscribe(data => {
    this.details = data;
    return this.details;
  },
  error => {
    console.log("Unable to fetch coin data");
  }
  );
 }


  loadAll() {
    const coinUrl = 'https://api.coinmarketcap.com/v1/ticker/?convert=US&limit=10'
    return this.http.get<Coin[]>(coinUrl)
      .subscribe(data => {
        this.dataStore.coins = data;    
        this._coins.next(Object.assign({},this.dataStore).coins);
      },
      error => {
        console.log("Unable to fetch coin data");
      }
      );
  }

}
