import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Coin } from 'app/coinmanager/models/coin';
import { ActivatedRoute } from '@angular/router';
import { CoinService } from 'app/coinmanager/services/coin.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit, AfterViewInit {

  coin: Coin;
  constructor(private route: ActivatedRoute,
    private elementRef: ElementRef,
    private service: CoinService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'] || 0;
      this.reloadthewidget();
      this.coin = this.service.coinById(id);
      setTimeout(() => {
        //to do include spinner;
      }, 500);

    });
  }

  reloadthewidget() {
    var e = document.getElementById("widget");
    if (e != null) {
      while (e.hasChildNodes())
        e.removeChild(e.lastChild);
    }
    this.ngAfterViewInit();
  };

  ngAfterViewInit() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.innerHTML = "console.log('done');"; //inline script
    var sym = 'BTC';
    if (this.coin) sym = this.coin.symbol;
    s.id = "coin";
    s.src = "https://widgets.cryptocompare.com/serve/v3/coin/chart?fsym=" + sym + "&tsyms=USD,EUR,CNY,GBP"; //external script
    let elem: Element = document.getElementById("widget");
    if (elem != null)
      elem.appendChild(s);
  }

}
