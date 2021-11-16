import { Component, OnInit } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "../shared/event.model";

@Component({
	templateUrl: "./event-details.component.html",
	styles: [
		`
			.container {
				padding-left: 20px;
				padding-right: 20px;
			}
			.event-image {
				height: 100px;
			}
		`,
	],
})
export class EventDetailsComponent implements OnInit {
	event: IEvent = {
		id: 0,
		name: "",
		date: new Date(),
		time: "",
		price: 0,
		imageUrl: "",
		sessions: [],
	};
	constructor(
		private eventService: EventService,
		private route: ActivatedRoute
	) {}
	ngOnInit() {
		this.event = this.eventService.getEvent(
			+this.route.snapshot.params["id"]
		);
	}
}
