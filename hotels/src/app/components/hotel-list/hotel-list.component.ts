import { Component, Input, SimpleChanges } from '@angular/core';
import { filter, map, mergeAll, tap, toArray, Observable } from 'rxjs';
import { iHotel } from 'src/app/interfaces/ihotel';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent {

  constructor(private hotelSrv: HotelService){}

  @Input() selectedPlace: any;
  hoteis: any;
  selectedSorted: string = '';
  showDrawer = false;
  selectedHotel: any;

  ngOnInit(): void {
    this.carregaHoteis();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedPlace']) {
      this.carregaHoteis();
    }
  }

  carregaHoteis(): void {
    try {
      console.log('place', this.selectedPlace)
      this.hotelSrv.getHotel().pipe(
        filter(data => data?.placeID === this.selectedPlace?.placeID),
        tap(data => {
          console.log(data)
          this.hoteis = data;
        })
      ).subscribe();
    } catch (error) {
      console.error(this.constructor.name, 'carregaHoteis', error);
    }
  }

  ordenar(): void {
    try {
      for (let hotel of this.hoteis) {
        hotel.hotels.sort((a: { name: string; price: number; stars: number; }, b: { name: string; price: number; stars: number; }) => {
          return this?.selectedSorted === 'name' ? a?.name?.toUpperCase().localeCompare(b?.name?.toUpperCase()) : this.selectedSorted === 'recommended' ? b?.price - a?.price : 
          this.selectedSorted === 'stars' ?  b?.stars - a?.stars : 0; 
        });
      }
    } catch (error) {
      console.error(this.constructor.name, "ordenar", error);
    }
  }

  getStarRating(stars: number): string {
    try {
      const fullStar = '\u2605';
      const emptyStar = '\u2606';
      const rating = Math.min(5, Math.max(0, stars));

      return fullStar.repeat(rating) + emptyStar.repeat(5 - rating);
    } catch (error) {
      console.error(this.constructor.name, "getStarRating", error);
    }
    return '';
  }

  openDrawer(hotel: iHotel): void {
    try {
      this.showDrawer = true;
      this.selectedHotel = hotel;
    } catch (error) {
      console.error(this.constructor.name, "openDrawer", error);
    }
  }

  filtrar(): void {
    try {
      for (let hotel of this.hoteis) {
        hotel.hotels = hotel.hotels.filter((hot: { placeID: any; }) => hot?.placeID === this.selectedPlace?.placeID);
      }
    } catch (error) {
      console.error(this.constructor.name, "ordenar", error);
    }
  }


}
