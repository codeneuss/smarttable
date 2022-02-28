import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ViewCell } from "ng2-smart-table";

@Component({
  template: `<button [value]="action" (click)="onCustomAction($event)">{{action}}</button>`,
})
export class CustomActionComponentComponent implements ViewCell, OnInit {
  constructor() {}
  action: string;

  @Input() value: string | number;
  @Input() rowData: { name: string; email: string; customAction: boolean };

  @Output() customActionEvent: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    this.action = this.rowData.customAction ? "Action A" : "Action B";
  }

  onCustomAction(event: Event): void {
    this.customActionEvent.emit(event);
  }
}
