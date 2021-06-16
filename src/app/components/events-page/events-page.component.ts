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
    selectedIndex
    subtabIndex
  eventsData:any;
  eventTagsData:any;
  showOrange:boolean[] =[false]
  ngOnInit() {
    this.selectedIndex;
    this.subtabIndex;
    
    this.activtedRoute.queryParams.subscribe(params => {
      ;
      if(params['tab']){
      this.selectedIndex = params['tab'];
      this.subtabIndex = params['subtab'];
      }
      else{
        this.selectedIndex = 0;
        this.subtabIndex =0;
      }
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
    
  }

  subtabChange(event){
  
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
