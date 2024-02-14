import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getUsers():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      map(data=>data),
      catchError(()=> throwError(()=>new Error("Error while retrieving users")))
    )
  }

  getUsersById(id:number):Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+id).pipe(
      map(data=>data),
      catchError((err)=> throwError(()=>new Error("Error while retrieving user id:"+id)))
    )
  }
  
}
