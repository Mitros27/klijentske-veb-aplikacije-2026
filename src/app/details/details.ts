import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { FlightModel } from '../../models/flight.model';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  flight = signal<FlightModel | null>(null)
  constructor(route: ActivatedRoute) {
    route.params.subscribe(params => {
      const id = params['id']
      axios.get(`https://flight.pequla.com/api/flight/${id}`)
        .then(rsp => this.flight.set(rsp.data))
    })
  }
}
