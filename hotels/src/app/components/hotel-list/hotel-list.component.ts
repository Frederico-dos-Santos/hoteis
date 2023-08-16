import { Component } from '@angular/core';
import { iHotel } from 'src/app/interfaces/ihotel';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent {

  constructor(private hotelSrv: HotelService){}

  hoteis: any;

  ngOnInit(): void {
   this.carregaHoteis();
  }


  carregaHoteis(): void {
    try{
      this.hotelSrv.getHotel().subscribe((data: iHotel) => {
        console.log(data)
        this.hoteis = data;
      });
    } catch (error){
      console.error(this.constructor.name, "carregaHoteis", error)
    }
  }
}
