import { CustomActionComponentComponent } from './custom-render-components/custom-action-component.component';
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `<ng2-smart-table
    [settings]="settings"
    [source]="data"
  ></ng2-smart-table>`,
  styles: [],
})
export class AppComponent {
  settings = {
    actions: false,
    columns: {
      name: {
        title: "Name",
      },
      email: {
        title: "Emailadresse",
      },
      customAction: {
        title: "CustomAction",
        type: "custom",
        renderComponent: CustomActionComponentComponent,
        onComponentInitFunction: (instance: CustomActionComponentComponent)  => {
          instance.customActionEvent.subscribe((event) => {
            console.debug(event);
            alert('customActionEvent ' + event.target.value + ' emitted!');
          })
        }
      },
    },
  };

  data = [
    {
      name: "Peter Super",
      email: "pesupi@example.com",
      customAction: true
    },
    {
      name: "Manfred Mustermann",
      email: "manni@example.com",
      customAction: false
    },
  ];

  onCustomAction() {
    alert('Test1');
  }
}
