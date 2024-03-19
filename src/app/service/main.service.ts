import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor( private http:HttpClient) { }
  // Data get method
  getData():Observable<any>{
   return this.http.get('https://angulartask-cfd32-default-rtdb.firebaseio.com/data.json')
  }
  // Data save method
  saveData(data:any) :Observable<any>{
  return this.http.post('https://angulartask-cfd32-default-rtdb.firebaseio.com/data.json',data);
  }

  // Data delete method
  daleteValue(id:any) :Observable<any>{
    return this.http.delete(`https://angulartask-cfd32-default-rtdb.firebaseio.com/data/${id}.json`);
    }
  getSingleUserData(id:any):Observable<any>{
    return this.http.get(`https://angulartask-cfd32-default-rtdb.firebaseio.com/data/${id}.json`)
  }
    // Data delete method
  editValue(id:any,data:any) :Observable<any>{
    return this.http.put(`https://angulartask-cfd32-default-rtdb.firebaseio.com/data/${id}.json`,data);
    }
  
}
