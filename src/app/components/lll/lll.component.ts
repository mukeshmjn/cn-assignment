import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
@Component({
  selector: 'app-lll',
  templateUrl: './lll.component.html',
  styleUrls: ['./lll.component.scss']
})
export class LllComponent implements OnInit {

 
  constructor(private evnt: EventService) { }

  eventsData:any;
  eventTagsData:any;
  showOrange:boolean[] =[false]
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

  showOrangeorN(i){

    this.showOrange[i]=!this.showOrange[i];
  }

}
