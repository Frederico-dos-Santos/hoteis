import { iPlace } from './../../interfaces/iplace';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith, tap } from 'rxjs';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private placeSrv: PlaceService){
    this.filteredOptions = new Observable<string[]>;
  }

  @Output() onPlaceSelected = new EventEmitter<iPlace>();

  myControl = new FormControl('');
  filteredOptions: Observable<string[]>;
  selectedPlace: any;
  
  places: any;

  ngOnInit(): void {
   this.carregaPlaces();
  }

  carregaPlaces(): void {
    try{
      this.placeSrv.getPlaces().subscribe((data: iPlace) => {
        console.log(data)
        this.places = data;
      });
    } catch (error){
      console.error(this.constructor.name, "carregaPlaces", error)
    }
  }
  
  filtrar(): void {
    try{
      this.onPlaceSelected.emit(this.selectedPlace);
    } catch (error){
      console.error(this.constructor.name, "filtrar", error)
    }
  }


}
