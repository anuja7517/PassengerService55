import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipassenger } from 'src/app/shared/models/passenger';
import { PasengerService } from 'src/app/shared/services/pasenger.service';

@Component({
  selector: 'app-pass-card',
  templateUrl: './pass-card.component.html',
  styleUrls: ['./pass-card.component.scss']
})
export class PassCardComponent implements OnInit {
@Input() passobj! : Ipassenger;
iseditable : boolean = false;
@Output() emitinfo : EventEmitter<Ipassenger> = new EventEmitter<Ipassenger>()
  constructor( private _passenger : PasengerService) { }

  ngOnInit(): void {
   
  }


  onEdit(){
    this.iseditable = true
  }

  ondone(udatename: string){
    this.iseditable = false
    this._passenger.udateaAllpass(this.passobj.id,udatename)
  }
  ondelete(){
    this._passenger.removeAllpass(this.passobj.id);
    this.emitinfo.emit(this.passobj)

  }
}
