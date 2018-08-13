import { Component } from "@angular/core";

@Component({
  selector: "jo-blog",
  templateUrl: "./blog.component.html"
})
export class BlogComponent {
  items: BlogItem[] = [
    {
      subject: "🎥 Cinematographer",
      link: "https://joster422.github.io/cswingle/",
      description: "Profile site with expandable images for a friend"
    },
    {
      subject: "💣 Mine Sweeper",
      link: "https://joster422.github.io/mine-sweeper/",
      description: "Watch a mine sweeper AI attempt to beat this classic game"
    },
    {
      subject: "🍴 Restaurant Menu",
      link: "https://joster422.github.io/ng-moxie/",
      description: "Restaurant site with flexable layout and google maps"
    },
    {
      subject: "Event Publisher",
      link: "http://joster422.github.io/angularjs-event-publisher/",
      description: "Created for an development competition",
      tech: "👴 AngularJS 1.3.14"
    },
    {
      subject: "Request Form",
      link: "http://joster422.github.io/angularjs-request-form/",
      description: "Created for an development competition",
      tech: "👴 AngularJS 1.2.32"
    },
    {
      subject: "Survey Maker",
      link: "http://joster422.github.io/angualrjs-survey-maker/",
      description: "Created for an development competition",
      tech: "👴 AngularJS 1.2.32"
    },
    {
      subject: "Memory Mastery",
      link: "http://joster422.github.io/MM/",
      description: "Like simon says, click and follow the pattern to win",
      tech: "👴 AngularJS 1.0.6"
    }
  ];

  constructor() {}
}

export interface BlogItem {
  subject: string;
  link: string;
  description: string;
  tech?: string;
}
