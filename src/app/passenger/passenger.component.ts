import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {

  pname :  string;
  ptype :  string;
  allPass : string;

  passengers = [
    {name: 'passenger 1', ticketType: 'Premium'},
    {name: 'passenger 2', ticketType: 'Firstclass'},
    {name: 'passenger 3', ticketType: 'Secondclass'}
  ];


  constructor() {

  }

  ngOnInit() {
  }

  showDetails(ticketType) {
    for (var pass in this.passengers) {
      if (this.passengers[pass].ticketType == ticketType) {
          this.pname = this.passengers[pass].name;
          this.ptype = this.passengers[pass].ticketType;
          this.allPass = null;
      }
      else if(ticketType == "all") {
          this.ptype = null;
          this.pname = null;
          this.allPass = ticketType;
      }
    }
  }
}