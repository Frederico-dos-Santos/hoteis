import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core'
import { EMPTY, Observable, of } from 'rxjs';
import { iHotel } from '../interfaces/ihotel';

@Injectable()
export class HotelService {

    private url = 'assets/hotel.json'; 

  constructor(private http: HttpClient) {}

  getHotel(): Observable<any> {
    try{
    return this.http.get<iHotel>(this.url);
    } catch (error){
      console.error(this.constructor.name, "getHotel", error)
    }
    return EMPTY;
  }

}