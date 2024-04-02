import { Component, OnInit } from '@angular/core';
import { Ipassenger } from 'src/app/shared/models/passenger';

import { PasengerService } from 'src/app/shared/services/pasenger.service';

@Component({
  selector: 'app-pass-dasbord',
  templateUrl: './pass-dasbord.component.html',
  styleUrls: ['./pass-dasbord.component.scss']
})
export class PassDasbordComponent implements OnInit {
  passarray !: Array<Ipassenger>;
  getcount ! : number
  constructor( private _passenger : PasengerService) { }

  ngOnInit(): void {
 this.passarray = this._passenger.fetchAllpassenger()
    this.getchange()
  }

  getchange(){
    this.getcount = this.passarray.filter(ele => ele.checkInDate).length
  }
  ondelete(obj : Ipassenger){
    this.getchange()
  }
}
