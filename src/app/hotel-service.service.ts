import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HotelServiceService {
  baseUrl = 'http://localhost:4000/';
  baseRoomSlot = 'api/rooms/';
  baseUserSlot = 'api/user/';
  baseBookingSlot = 'api/booking/';
  roomDetail:any;
  loginDetail:any;
  private reloadLogin = new Subject<any>();

  constructor(private httpService:HttpClient) { }

  getRoomDetails(val: string){
    return this.httpService.get(this.baseRoomSlot+val);
  }

  registerUser(val: string, obj:any){
    return this.httpService.post(this.baseUserSlot+val,obj);
  }
  bookRoom(val: string, obj:any){
    return this.httpService.post(this.baseBookingSlot+val,obj);
  }
  loginUser(val: string, obj:any){
    return this.httpService.post(this.baseUserSlot+val,obj);
  }
  sendRefresh(message:any){
    this.loginDetail = message;
    this.reloadLogin.next(message);
  }
  getRefresh(){
    return this.reloadLogin.asObservable();
  }
}
