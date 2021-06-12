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

  ngOnInit() {
   this.getEventList();
  }

  getEventList(){
    this.evnt.getEventsList().subscribe(res=>{
      debugger;
      console.log(res);
      this.eventsData = res.data.events
    })
  }


}
