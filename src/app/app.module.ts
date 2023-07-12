import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';




import { Chart } from 'chart.js';
import { registerables } from 'chart.js';

Chart.register(...registerables)

@NgModule({
  declarations: [
    AppComponent,
    OneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
