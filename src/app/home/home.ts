import { Component, signal } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  flights = signal<any[]>([])
  
  constructor(){
    axios.get('https://flight.pequla.com/api/flight/list?type=departure')
    .then(rsp=>this.flights.set(rsp.data))
  }
}
