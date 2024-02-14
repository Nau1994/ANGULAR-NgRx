import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import {  throwError } from 'rxjs'
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  getFeeds(){
    return this.http.get("https://fir-post-app-9497d-default-rtdb.firebaseio.com/feeds.json").pipe(
      // map(data=>data),
      catchError(error=>throwError(()=>new Error(error)))
    )
  }

  saveFeed(feed:any){
    return this.http.post<{ name: string }>(`${environment.FIRBASE_URL}/feeds.json`,feed).pipe(
      // map(data=>data),
      catchError(error=>throwError(()=>new Error(error)))
    )
  }

  deleteFeed(feed:any){
    return this.http.delete(`${environment.FIRBASE_URL}/feeds/${feed.id}.json`).pipe(
      // map(data=>data),
      catchError(error=>throwError(()=>new Error(error)))
    )
  }

  updateFeed(feed:any){
    return this.http.put(`${environment.FIRBASE_URL}/feeds/${feed.id}.json`,feed).pipe(
      // map(data=>data),
      catchError(error=>throwError(()=>new Error(error)))
    )
  }
}
