import { Component, Input } from "@angular/core";

import { BlogItem } from "../blog/blog.component";

@Component({
  selector: "jo-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent {
  @Input("model")
  model: BlogItem;

  constructor() {}
}
