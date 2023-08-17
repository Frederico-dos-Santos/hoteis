import { Component, Input } from '@angular/core';
import { iHotel } from 'src/app/interfaces/ihotel';

@Component({
  selector: 'app-drawer-hotel',
  templateUrl: './drawer-hotel.component.html',
  styleUrls: ['./drawer-hotel.component.css']
})
export class DrawerHotelComponent {

  @Input() selectedHotel: any;
}
