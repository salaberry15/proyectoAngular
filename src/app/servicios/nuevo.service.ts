
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NuevoService {

  constructor(private http:HttpClient) { }
  getDatos():Observable<any>{
    return this.http.get('./assets/db/datos.json')
  }
}
