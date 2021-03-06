import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";
import { ToastrService } from "../common/toastr.service";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "./shared/event.model";

@Component({
  templateUrl: "./events-list.component.html",
  styleUrls: ["./events-list.component.css"],
})
export class EventsListComponent implements OnInit {
  events!: IEvent[];
  constructor(
    private eventService: EventService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  handleEventClicked(data: any) {
    console.log(data);
  }

  ngOnInit(): void {
    this.events = this.route.snapshot.data["events"];
  }
  handleThumbnailClick(eventName: string) {
    this.toastr.success(eventName);
  }
}
