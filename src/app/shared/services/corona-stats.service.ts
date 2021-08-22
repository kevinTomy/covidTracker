import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CoronaStatsService {

  constructor(private http : HttpClient) { }


    getCurrentStats():Observable<any>{
      return this.http.get(`${environment.baseUrl}all`)
    }

    getCountryWiseStats():Observable<any>{
      return this.http.get(`${environment.baseUrl}countries`);
    }
}
