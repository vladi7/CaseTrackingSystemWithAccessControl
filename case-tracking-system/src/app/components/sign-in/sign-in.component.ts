//Full Angular 7: 8|9 Firebase Authentication System.” PositronX.io, 2 June 2020, www.positronx.io/full-angular-7-firebase-authentication-system/.

import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  constructor(
    public authService: AuthService, private http: HttpClient
  ) {
    // this.http.get<any>("https://cors-anywhere.herokuapp.com/https://rest-service-case-tracking.firebaseapp.com/api/v1/cases/").subscribe(data => {
    //   console.log(data);
    // })
    const name = 'case9';
    const manager = 'dubrovenski.v@gmail.com';
    const  date = 6272020;
    const url = 'www.helloworld.com';
    const COI1 = 'case2';
    const COI2 = 'case3';

    const CaseID = "case1";
    const url1 = 'www.helloworld.com';
    const url2 = 'www.helloworld2.com';
    let COI = [];

    COI.push(COI1);
    COI.push(COI2);


    // this.http.post<any>('https://cors-anywhere.herokuapp.com/https://rest-service-case-tracking.firebaseapp.com/api/v1/case/', {name, manager, date, url, COI }).subscribe(data => {
    //   console.log(data);
    // });
    // this.http.post<any>('https://cors-anywhere.herokuapp.com/https://rest-service-case-tracking.firebaseapp.com/api/v1/document/', {CaseID, urls : {url1, url2} }).subscribe(data => {
    //   console.log(data);
    // });
  }

  ngOnInit() { }

}
