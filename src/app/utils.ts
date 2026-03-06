import { Injectable } from '@angular/core';
import { FlightModel } from '../models/flight.model';

@Injectable({
  providedIn: 'root',
})
export class Utils {
  formatDate(iso: string) {
    return new Date(iso).toLocaleString('sr-RS', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    })
  }
  getImageUrl(flight: FlightModel) {
    const filename = flight.destination.split(' ')[0].toLocaleLowerCase()
    return `https://img.pequla.com/destination/${filename}.jpg`
  }
}