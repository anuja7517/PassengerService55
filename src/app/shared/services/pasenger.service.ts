import { Injectable } from '@angular/core';
import { Ipassenger } from '../models/passenger';


@Injectable({
  providedIn: 'root'
})
export class PasengerService {
  passArr: Array<Ipassenger> = [
    {
      id: 1,
      fullname: 'Anuja bhosle',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null,
    },
    {
      id: 2,
      fullname: 'Arti patil',
      checkedIn: false,
      checkInDate: null,
      children: [
        { name: 'Ted', age: 12 },
        { name: 'Chloe', age: 7 },
      ],
    },
    {
      id: 3, 
      fullname: 'madu patil',
      checkedIn: true,
      checkInDate: 1491606000000,
      children: null,
    },
    {
      id: 4,
      fullname: 'chiu bhosle',
      checkedIn: true,
      checkInDate: 1488412800000,
      children: [{ name: 'Jessica', age: 1 }],
    },
    {
      id: 5,
      fullname: 'sonu patil',
      checkedIn: false,
      checkInDate: null,
      children: null,
    },
  ];
  constructor() { }
  

  fetchAllpassenger(){
     return this.passArr;
  }

  udateaAllpass(id : number, udatename : string){
    for (let i = 0; i < this.passArr.length; i++) {
      if(this.passArr[i].id===id){
        let getname = this.passArr[i].fullname;
        this.passArr[i].fullname = udatename;
       
       

      }
      
    }
  }
  removeAllpass(id :number){
    let getindex = this.passArr.findIndex(ele => ele.id===id)
    console.log(this.passArr[getindex].fullname);
    let gert1 = this.passArr[getindex].fullname
    this.passArr.splice(getindex,1)
    
  }
}
