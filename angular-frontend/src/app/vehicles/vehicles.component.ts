import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicles',
  template: `
    <h2>Available Vehicles</h2>
    <ul>
      <li *ngFor="let vehicle of vehicles">
        {{ vehicle.type }} - ₹{{ vehicle.price }}/day
      </li>
    </ul>
  `,
})
export class VehiclesComponent implements OnInit {
  vehicles = [
    { type: 'Car', price: 2000 },
    { type: 'Bike', price: 500 },
    { type: 'Scooty', price: 400 }
  ];

  ngOnInit() {}
}
