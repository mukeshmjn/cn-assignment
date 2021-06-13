import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class EventService {

constructor(public http: HttpClient) { }
baseUrl = 'https://api.codingninjas.com/api/v3/'
eventListUrl = `${this.baseUrl}events`;
eventTagsUrl = `${this.baseUrl}event_tags`

getEventsList():Observable<any>{
  
  let params = new HttpParams();
  params = params.append('event_category', 'ALL_EVENTS');
  params = params.append('event_sub_category', 'Upcoming');
  params = params.append('tag_list', '');
  params = params.append('offset', '0');
  return this.http.get(this.eventListUrl,{params: params})
}

getEventTags():Observable<any>{
  return this.http.get(this.eventTagsUrl)
}
}
