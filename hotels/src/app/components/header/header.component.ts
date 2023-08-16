import { iPlace } from './../../interfaces/iplace';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith, tap } from 'rxjs';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private placeSrv: PlaceService){}

  myControl = new FormControl('');
  filteredOptions!: Observable<string[]>;
  options: string[] = ['One', 'Two', 'Three']
  
  places: any;

  ngOnInit(): void {
   this.carregaPlaces();
   this.filteredOptions = this.myControl.valueChanges.pipe(
    startWith(''),
    map(value => this._filter(value || '')),
  );
  }


  carregaPlaces(): void {
    try{
      this.placeSrv.getPlaces().subscribe((data: iPlace) => {
        console.log(data)
        this.places = data;
      });
    } catch (error){
      console.error(this.constructor.name, "carregaHoteis", error)
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    console.log('value: ', this.options)
    console.log('place: ', this.places[0].name)

    return this.options.filter((place: any) => place?.toLowerCase().includes(filterValue));
  }

}
