import { Component } from '@angular/core';
import { VehiclesService } from 'src/app/services/vehicles.service';
@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {

  vehicleitems:any;
  constructor(private service:VehiclesService){}

  ngOnInit():void{
    this.vehicleitems = this.service.vehicleitems;
  }
}
