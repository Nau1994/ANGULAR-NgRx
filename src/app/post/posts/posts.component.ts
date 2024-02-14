import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit ,OnChanges{
  feeds:any[]=[];
  isLoading=false;

  constructor(private postService:PostService){}
  ngOnChanges(): void {
    console.log(this.feeds)

    
  }
  ngOnInit(): void {
    this.isLoading=true;

    this.feeds.push({id:Number(Math.floor(Math.random()*1000+1000).toString()+this.feeds.length.toString()),
      title:"Title 1",post:"Post message !!"})
    this.feeds.push({id:Number(Math.floor(Math.random()*1000+1000).toString()+this.feeds.length.toString()),
      title:"Title 2",post:"Post message !!"})

    this.loadFeeds()
  }

  private loadFeeds(id=null){
    this.feeds=[]
    this.postService.getFeeds().subscribe((data:any)=>{
      for(let key in data){
        if(!id || id===key) this.feeds.push({...data[key],id:key})
      }

      this.isLoading=false;
    })
  }

  onSubmit(){}

  onFeedAdded(event:any){
    this.isLoading=true;
    // this.feeds.push({...event,id:Number(Math.floor(Math.random()*1000+1000).toString()+this.feeds.length.toString())})

    this.postService.saveFeed(event).subscribe(data=>{
      console.log('saved',data)
      this.feeds.push({...event,id:data.name})

      this.isLoading=false;
    })

  }

  onFeedUpdate(feed:any){
    this.isLoading=true;

    this.postService.updateFeed(feed).subscribe(data=>{
      console.log('updated',data)
      
      this.feeds.forEach((v,i,a)=>{
        if(v.id===feed.id){
          a[i]=feed
        }
      })

      this.isLoading=false;
    })
  }

  onFeedDelete(feed:any){
    this.isLoading=true;

    this.postService.deleteFeed(feed).subscribe(data=>{
      console.log('deleted',data)
      this.feeds=this.feeds.filter(f=>f.id!=feed.id)

      this.isLoading=false;
    })

  }
}
