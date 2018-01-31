import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import 'zone.js';
import { CoinService } from 'app/coinmanager/services/coin.service';
import { Observable } from 'rxjs/Observable';
import { Coin } from 'app/coinmanager/models/coin';
import { Router }  from '@angular/router';
import { MatSidenav } from '@angular/material';
const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width:${SMALL_WIDTH_BREAKPOINT}px`)
  coins: Observable<Coin[]>;

  constructor(zone: NgZone, 
              private coinService: CoinService,
              private router :Router
             ) {
    this.mediaMatcher.addListener(mql =>
      zone.run(() => this.mediaMatcher = mql));
  }

  @ViewChild(MatSidenav) sidenav:MatSidenav;

  ngOnInit() {
    this.coins = this.coinService.coins;
    this.coinService.loadAll();

    this.coins.subscribe(data=>{
      if (data.length>0) this.router.navigate(['/coinmanager',data[0].id]);
      // this.mainCoin = data.map(c => c.name);   
      // var details = this.coinService.loadCoinDetail(this.mainCoin);
    });

    this.router.events.subscribe(()=>{
     if(this.isScreenSmall())
     this.sidenav.close();
    });
  }



  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }
}
