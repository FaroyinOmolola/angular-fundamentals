import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IEvent } from "./shared/event.model";
@Component({
	selector: "event-thumbnail",
	styles: [
		`
			.pad-left {
				margin-left: 10px;
			}
			.well div {
				color: #bbb;
			}
			.thumbnail {
				min-height: 210px;
			}
			.green {
				color: #003300 !important;
			}
			.bold {
				font-weight: bold;
			}
		`,
	],
	template: `
		<div
			[routerLink]="['/events', event.id]"
			class="well hoverwell thumbnail"
		>
			<h2>{{ event?.name }}</h2>
			<div>Date: {{ event?.date }}</div>
			<div>Name: {{ event?.name }}</div>
			<div
				[ngClass]="{
					green: event?.time === '8:00 am',
					bold: event?.time === '8:00 am'
				}"
				[ngSwitch]="event?.time"
			>
				Time: {{ event?.time }}
				<span *ngSwitchCase="'8:00 am'">(Early start)</span>
				<span *ngSwitchCase="'10:00 am'">(Late start)</span>
				<span *ngSwitchDefault>(Normal start)</span>
			</div>
			<div>Price: \${{ event.price }}</div>
			<div *ngIf="event?.location">
				<span>Location: {{ event?.location?.address }} </span>

				<span class="pad-left"
					>{{ event?.location?.city }},
					{{ event?.location?.country }}</span
				>
			</div>
			<div *ngIf="event?.onlineUrl">
				Online url: {{ event?.onlineUrl }}
			</div>
		</div>
	`,
})
export class EventThumbnailComponent {
	@Input() event!: IEvent;

	// someProperty: string = "some value";
	// // @Output() eventClick = new EventEmitter();

	// // handleClickMe() {
	// // 	this.eventClick.emit(this.event.name);
	// // }
	// logFoo() {
	// 	console.log("foo");
	// }
}
