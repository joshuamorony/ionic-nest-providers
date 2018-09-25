import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient) { 

  }

  getMessages(): Observable<Object> {
    return this.http.get('http://localhost:3000/messages');
  }

  getMessage(id: string): Observable<Object> {
    return this.http.get(`http://localhost:3000/messages/${id}`);
  }

}
