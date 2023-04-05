import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private _albumUrl = "../assets/album.json";
  constructor(private _http: HttpClient) { }


  getAlbum(id: number) {
    return this._http.get(this._albumUrl).map((response) => response.json());
  }
}
