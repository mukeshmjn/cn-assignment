import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../services/event.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ActivatedRoute,Router } from '@angular/router';
import { JsonpClientBackend } from '@angular/common/http';
@Component({
  selector: 'app-webi-alltime-fav',
  templateUrl: './webi-alltime-fav.component.html',
  styleUrls: ['./webi-alltime-fav.component.scss']
})
export class WebiAlltimeFavComponent implements OnInit {

  constructor(private evnt: EventService,
    private lodr: NgxSpinnerService,
    private activtedRoute: ActivatedRoute,
    private router: Router
    ) { }
    tags:any;
    eventsData:any;
    offset:number = 0
    eventTagsData:any;
    eventsPayload:any=[];
    currpage:any=1;
    pageCount:any;
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

    this.evnt.getEventsList('WEBINAR','All Time Favorites',this.tags).subscribe(res=>{
      this.pageCount = res.data.page_count;
   
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

  pageUp(){
    debugger
    this.currpage+=1;
    this.offset+=20;
    this.getEventList1();
  }

  pageDown(){
    this.currpage-=1;
    this.offset-=20;
    
    this.getEventList1();
  }

  manualInput(){
    if(this.currpage>1){
      this.offset = (this.currpage-1) * 20;
      this.getEventList1();
    }
    
  }

  getEventList1(){
    debugger
    
        this.evnt.getEventsList1('WEBINAR','All Time Favorites',this.tags,this.offset).subscribe(res=>{
          
       
          this.eventsData = res.data.events;
          this.pageCount = res.data.page_count;
          console.log('pg count: ',this.pageCount)
        })
      }
}
