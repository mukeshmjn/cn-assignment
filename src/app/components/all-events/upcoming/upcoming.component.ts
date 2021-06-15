import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../services/event.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ActivatedRoute,Router } from '@angular/router';
import { JsonpClientBackend } from '@angular/common/http';
@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent implements OnInit {

  constructor(private evnt: EventService,
    private lodr: NgxSpinnerService,
    private activtedRoute: ActivatedRoute,
    private router: Router
    ) { }
    tags:any;
  eventsData:any;
  eventTagsData:any;
  eventsPayload:any=[];
  showOrange:boolean[] =[false]

  ngOnInit() {
    debugger
    this.lodr.show();
    this.activtedRoute.queryParams.subscribe(params => {

      
      if(params['eventTags'])
      this.tags = params['eventTags'];
      else
      this.tags = '';
      this.getEventList();
      this.getEvntTags();

 
    })

  }

  getEventList(){
debugger

    this.evnt.getEventsList('ALL_EVENTS','Upcoming',this.tags).subscribe(res=>{
      
   
      this.eventsData = res.data.events
    })
  }

  getEvntTags(){
    debugger
    this.evnt.getEventTags().subscribe(res=>{
      
      this.eventTagsData = res.data.tags
      if(this.tags){
    let tagsEv =   this.tags.split(",");
        console.log(tagsEv)
     if(tagsEv.length>0){
      tagsEv.forEach(tag=>{
       // this.eventTagsData.indexOf(tag)
        this.showOrange[this.eventTagsData.indexOf(tag)] = true;
      })
    }
    else{
      this.showOrange[this.eventTagsData.indexOf(tagsEv)] = true;
    }
    }
      this.lodr.hide();
    })
  }

  showOrangeorN(i){
debugger


if(this.eventsPayload.length!=0)
console.log(this.eventsPayload.indexOf(this.eventTagsData[i]));
    this.showOrange[i]=!this.showOrange[i];
    if(this.showOrange[i]==true)
    this.eventsPayload.push(this.eventTagsData[i]);
    else
    this.eventsPayload.splice(this.eventsPayload.indexOf(this.eventTagsData[i]),1)
    this.router.navigate([], {
       relativeTo: this.activtedRoute,
      queryParams: {
        eventTags: this.eventsPayload.toString()
      },
      queryParamsHandling: 'merge',
    
    //  skipLocationChange: true
 
    });
    // this.ngOnInit();
  }

  tabChange(event){
    debugger
  }

}
