import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit {

  constructor(private evnt: EventService) { }

  eventsData:any;
  eventTagsData:any;
  ngOnInit() {
   this.getEventList();
   this.getEvntTags();
  }

  getEventList(){
    this.evnt.getEventsList().subscribe(res=>{

      console.log(res);
      this.eventsData = res.data.events
    })
  }

  getEvntTags(){
    this.evnt.getEventTags().subscribe(res=>{
      console.log(res);
      this.eventTagsData = res.data.tags
    })
  }


}
