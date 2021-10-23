import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-text',
  templateUrl: './carousel-text.component.html',
  styleUrls: ['./carousel-text.component.scss'],
})
export class CarouselTextComponent implements OnInit {
  storyList: Array<string> = [];

  constructor() {}

  ngOnInit(): void {
    this.storyList = [
      'Free Practice Update – United States Grand Prix 2021',
      'F1 Esports Pro Tips: Driving In The Wet',
      'Quiz: US Special',
      'Acura Returns For US Grand Prix',
      'United States Pre-Race Programme',
    ];
  }
}
