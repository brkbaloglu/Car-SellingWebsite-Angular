import { Component } from '@angular/core';
import { ReviewsService } from 'src/app/services/reviews.service';
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  reviewitems:any;

  constructor(private service: ReviewsService){}

  ngOnInit():void{
    this.reviewitems = this.service.reviewitems;
  }
}
