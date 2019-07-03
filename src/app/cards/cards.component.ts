import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
	public data: any;
	public result: any;
	public dataUrl: string = 'https://perpule-data.firebaseio.com/0.json/';

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }
  getData(): void {
  	this.getItemsService()
  	.subscribe(data => {this.data = data; this.result = this.data; console.log(this.result)});
  }
  getItemsService() {
  	return this.http
  	.get<any[]>(this.dataUrl)
  	.pipe(map(data => data));
  }
}
