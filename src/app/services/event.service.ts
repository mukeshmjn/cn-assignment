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

getEventsList(event_category,event_sub_category,tag_list):Observable<any>{
  
  let params = new HttpParams();
  params = params.append('event_category',event_category);
  params = params.append('event_sub_category', event_sub_category);
  params = params.append('tag_list', tag_list);
  params = params.append('offset', '0');
  return this.http.get(this.eventListUrl,{params: params})
}

getEventTags():Observable<any>{
  return this.http.get(this.eventTagsUrl)
}
}
