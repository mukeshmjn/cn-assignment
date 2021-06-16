import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { NgxSpinnerService } from "ngx-spinner";

import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit {

  constructor(private evnt: EventService,
    private lodr: NgxSpinnerService,
    private activtedRoute: ActivatedRoute,
    private router: Router
    ) { }
    selectedIndex:any=0
    subtabIndex:any =0;
  eventsData:any;
  eventTagsData:any;
  showOrange:boolean[] =[false]
  ngOnInit() {
    this.selectedIndex;
    this.subtabIndex;
    debugger
    this.activtedRoute.queryParams.subscribe(params => {
      debugger;
      if(params['tab']){
      this.selectedIndex = params['tab'];
      this.subtabIndex = params['subtab'];
      debugger}
      console.log(params);
    })
    // this.lodr.show();
  //  this.getEventList();
   this.getEvntTags();
  }

  // getEventList(){
  //   this.evnt.getEventsList().subscribe(res=>{

  //     console.log(res);
  //     this.eventsData = res.data.events
  //   })
  // }

  getEvntTags(){
    this.evnt.getEventTags().subscribe(res=>{
      console.log(res);
      this.eventTagsData = res.data.tags
      // this.lodr.hide();
    })
  }

  showOrangeorN(i){

    this.showOrange[i]=!this.showOrange[i];
  }

  tabChange(event){
    this.selectedIndex=''
   
    this.selectedIndex=event;
    this.subtabIndex = 0;
    this.router.navigate(['/events'],
    {queryParams: {tab:this.selectedIndex,subtab:this.subtabIndex}});
    debugger
  }

  subtabChange(event){
  debugger
  // if(event)
  this.subtabIndex=event
  this.router.navigate(['/events'],
  {queryParams: {tab:this.selectedIndex,subtab:this.subtabIndex}});
  }

  // test(){
  //   this.router.navigate(['/events'],
  //   {queryParams: {tags:'nn,ll,,ii'}});
  // }
}
