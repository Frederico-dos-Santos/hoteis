import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core'
import { Observable, of } from 'rxjs';
import { iPlace } from '../interfaces/iplace';

@Injectable()
export class PlaceService {

    private url = 'assets/place.json'; 

  constructor(private http: HttpClient) {}

  getPlaces(): Observable<any> {
    try{
    return this.http.get<iPlace>(this.url);
    } catch (error){
      console.error(this.constructor.name, "getHotel", error)
    }
    return of(null);
  }

}