import { Component ,EventEmitter,Input, Output} from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
@Input() feed:any
@Output() addedFeed:EventEmitter<any>=new EventEmitter<any>()
@Output() updatedFeed:EventEmitter<any>=new EventEmitter<any>()
@Output() deletededFeed:EventEmitter<any>=new EventEmitter<any>()
editMode=false;

constructor(private postService:PostService){}

onSubmit(){}

onFeedAdd(postForm:NgForm){
  // this.postService.saveFeed(postForm.value).subscribe(data=>{
  //   console.log(data)
  //   this.addedFeed.emit(data)
  // })
  this.addedFeed.emit(postForm.value)
  postForm.resetForm()
}

onEdit(feedForm:NgForm){
  if(this.editMode){

    let updatedFeed={...this.feed,...feedForm.value}

    // this.postService.updateFeed(updatedFeed).subscribe(data=>{
    //   console.log('updated',data)
    //   this.updatedFeed.emit(updatedFeed)
    // })

    this.updatedFeed.emit(updatedFeed)

    this.editMode=!this.editMode
  }else{
    feedForm.form.patchValue({
      ...this.feed
    })
    this.editMode=!this.editMode
  }
}

onClose(){
  this.editMode=!this.editMode
}

onDelete(){
  console.log(this.feed.id)
  // this.postService.deleteFeed(this.feed).subscribe(data=>{
  //   console.log(data)
  //   this.deletededFeed.emit(this.feed.id)
  // })
  this.deletededFeed.emit(this.feed)
}

}
