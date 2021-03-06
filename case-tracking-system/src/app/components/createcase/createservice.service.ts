import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateserviceService {

  constructor(private http: HttpClient, private router: Router) { }
// service that is used to send the request to the server to add a case
  createCasePost(name, manager, date, COI, usersWithCOI){
     this.http.post<any>('https://rest-service-case-tracking.firebaseapp.com/api/v1/case/', {name, manager, date, COI, usersWithCOI }).subscribe(data => {
       let map = new Map<string, string>();
       map.set('filename', '');
       map.set('url', '');
       let arrayJson = [];
       let jsonObject = {};
       map.forEach((value, key) => {
         jsonObject[key] = value;
       });
       arrayJson.push(jsonObject);
       const DocumentID = name;
       this.http.post<any>('https://rest-service-case-tracking.firebaseapp.com/api/v1/document/', {DocumentID, urls : arrayJson }).subscribe((result2: any) => {
         console.log(result2);
         this.router.navigate(['/app-caselist']);
       });
    });
    this.router.navigate(['/app-caselist']);
  }
}
