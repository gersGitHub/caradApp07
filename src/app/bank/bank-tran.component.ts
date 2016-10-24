import { Component, OnInit } from '@angular/core';
import { BankTranService } from '../services/bank-tran.service'
import { BankTran } from '../../../models/BankTran'

@Component({
  selector: 'app-bank-tran',
  templateUrl: './bank-tran.component.html',
  styleUrls: ['./bank-tran.component.css']
})
export class BankTranComponent implements OnInit {

  banktrans: BankTran[];

  constructor(private _bankTranService: BankTranService) {
    this._bankTranService.getBankTrans()
          .subscribe(banktransFromDb => {
            this.banktrans = banktransFromDb;
            console.log("this.banktrans.length is " + this.banktrans.length)
            let i:number;
            let runningBal:number = 340901.32;
            for(i = 0;i < this.banktrans.length; i++){
                this.banktrans[i].bankTranBal =  runningBal + this.banktrans[i].bankTranAmnt;
                runningBal = this.banktrans[i].bankTranBal;
            }
    });
  }

  ngOnInit() {
  }

}
