import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreDataService {

  constructor(private http: HttpClient, private router: Router) { }

  getStorData() {
    return this.http.get('./assets/sample.json').pipe(map((res: any) => {
      return res.data;
    }));
  }
}
