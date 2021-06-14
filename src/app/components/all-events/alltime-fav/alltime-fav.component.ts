import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../services/event.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-alltime-fav',
  templateUrl: './alltime-fav.component.html',
  styleUrls: ['./alltime-fav.component.scss']
})
export class AlltimeFavComponent implements OnInit {

  constructor(private evnt: EventService,
    private lodr: NgxSpinnerService
    ) { }

  eventsData:any;
  eventTagsData:any;
  showOrange:boolean[] =[false]
  
  ngOnInit() {
    this.lodr.show();
   this.getEventList();
   this.getEvntTags();
  }

  getEventList(){
    this.evnt.getEventsList('ALL_EVENTS','All Time Favorites','').subscribe(res=>{

      console.log(res);
      this.eventsData = res.data.events
    })
  }

  getEvntTags(){
    this.evnt.getEventTags().subscribe(res=>{
      console.log(res);
      this.eventTagsData = res.data.tags
      this.lodr.hide();
    })
  }

  showOrangeorN(i){

    this.showOrange[i]=!this.showOrange[i];
  }

  tabChange(event){
    debugger
  }


}
