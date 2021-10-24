import { Component, OnInit } from '@angular/core';
import { timer, Subscription } from 'rxjs';

interface storyListItem {
  category: string;
  title: string;
}

@Component({
  selector: 'app-carousel-text',
  templateUrl: './carousel-text.component.html',
  styleUrls: ['./carousel-text.component.scss'],
})
export class CarouselTextComponent implements OnInit {
  storyList: Array<storyListItem> = [];
  currentStory: number = 0;
  totalStoryCount: number = 5;
  storyChangetimer = timer(3500, 3500);
  rxjsSubscriptions: Array<Subscription> = [];

  constructor() {}

  ngOnInit(): void {
    this.storyList = [
      {
        category: 'F1',
        title: 'Free Practice Update – United States Grand Prix 2021',
      },
      {
        category: 'GAMING',
        title: 'F1 Esports Pro Tips: Driving In The Wet',
      },
      {
        category: 'F1',
        title: 'Quiz: US Special',
      },
      {
        category: 'F1',
        title: 'Acura Returns For US Grand Prix',
      },
      {
        category: 'F1',
        title: 'United States Pre-Race Programme',
      },
    ];

    this.rxjsSubscriptions.push(
      this.storyChangetimer.subscribe((_) => {
        this.currentStory = (this.currentStory + 1) % this.totalStoryCount;
      })
    );
  }

  ngOnDestroy(): void {
    // remove subscriptions
    for (let subscription of this.rxjsSubscriptions) {
      subscription.unsubscribe();
    }
  }
}
