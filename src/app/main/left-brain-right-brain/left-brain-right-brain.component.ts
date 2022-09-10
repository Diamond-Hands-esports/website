import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-brain-right-brain',
  templateUrl: './left-brain-right-brain.component.html',
  styleUrls: ['./left-brain-right-brain.component.scss']
})
export class LeftBrainRightBrainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  leftBrainList = [
    {
      icon: "groups",
      name: "Staff, Players & Streamers",
    },
    {
      icon: "emoji_events",
      name: "Stats & Achievements",
    },
    {
      icon: "trending_up",
      name: "Partners",
    },
    {
      icon: "event",
      name: "Roadmap",
    },
  ]

  rightBrainList = [
    {
      icon: "auto_stories",
      name: "Our story & Timeline",
    },
    {
      icon: "history",
      name: "Social Activities",
    },
    {
      icon: "directions_bike",
      name: "Design & Lifestyle",
    },
    {
      icon: "people",
      name: "Diamond Hands Family",
    }
  ]
}
