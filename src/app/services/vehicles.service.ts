import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor() { }

  vehicleitems=[
    {
      id:1,
      brand:"Renault Megane 1.5 dCi Touch Plus ",
      year:2018,
      price:983850,
      kilometer:79500,
      color: "blue",
      status:"second hand",
      engine_capacity: "1461 cc",
      engine_power:"110hp",
      image:"../../../assets/img/renault.jpg"
    },
    {
      id:2,
      brand:"Mercedes-Benz E S250 CDI Premium",
      year:2013,
      price:1510000,
      kilometer:172000,
      color: "white",
      status:"second hand",
      engine_capacity: "2143 cc",
      engine_power:"204hp",
      image:"../../../assets/img/mercedes.jpg"

    },
    {
      id:3,
      brand:"BMW 320d xDrive M Sport",
      year:2013,
      price:1300000,
      kilometer:240000,
      color: "white",
      status:"second hand",
      engine_capacity: "1995 cc",
      engine_power:"184hp",
      image:"../../../assets/img/bmw.jpg"

    },
    {
      id:4,
      brand:"Fiat Egea 1.4 Fire Easy Plus",
      year:2023,
      price:730000,
      kilometer:1001,
      color: "blue",
      status:"second hand",
      engine_capacity: "1368 cc",
      engine_power:"95hp",
      image:"../../../assets/img/fiat.jpg"

    },
    {
      id:5,
      brand:"Ford Fiesta 1.1 Style",
      year:2023,
      price:855000,
      kilometer:1001,
      color: "white",
      status:"second hand",
      engine_capacity: "1084 cc",
      engine_power:"75hp",
      image:"../../../assets/img/ford.jpg"

    },
    {
      id:6,
      brand:"Citroén C-Elysée 1.6 HDi Live",
      year:2017,
      price:520500,
      kilometer:168085,
      color: "white",
      status:"second hand",
      engine_capacity: "1560 cc",
      engine_power:"92hp",
      image:"../../../assets/img/citroen.jpeg"

    },
    {
      id:7,
      brand:"Toyota Corolla 1.5 Dream",
      year:2021,
      price:990900,
      kilometer:23000,
      color: "white",
      status:"second hand",
      engine_capacity: "1490 cc",
      engine_power:"123 hp",
      image:"../../../assets/img/toyota.jpg"

    },
    {
      id:8,
      brand:"Volkswagen Passat 1.6 TDI BlueMotion Comfortline",
      year:2019,
      price:1295000,
      kilometer:107680,
      color: "black",
      status:"second hand",
      engine_capacity: "1598 cc",
      engine_power:"120 hp",
      image:"../../../assets/img/vw.jpg"

    }
  ];
}
