import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AppComponent } from './app.component';
import { CustomActionComponentComponent } from './custom-render-components/custom-action-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomActionComponentComponent
  ],
  imports: [
    BrowserModule,
    Ng2SmartTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
