import { Component, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Utils } from '../utils';
import { FlightModel } from '../../models/flight.model';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../services/auth.service';
import { FlightService } from '../services/flight.service';
import { Loading } from '../loading/loading';

@Component({
  selector: 'app-home',
  imports: [RouterLink, MatCardModule, MatButtonModule, MatIconModule, Loading],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  public service = AuthService
  flights = signal<any[]>([])

  constructor(public utils: Utils) {
    FlightService.getFlights()
      .then(rsp => {
        const sorted = rsp.data.sort((f1, f2) => {
          return new Date(f1.scheduledAt).getTime() - new Date(f2.scheduledAt).getTime()
        })
        this.flights.set(sorted)
      })
  }
}
