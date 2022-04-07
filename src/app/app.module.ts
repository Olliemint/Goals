import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Goal2Component } from './goal2/goal2.component';
import { Goal2detailComponent } from './goal2detail/goal2detail.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { Goal2FormComponent } from './goal2-form/goal2-form.component';

@NgModule({
  declarations: [
    AppComponent,
    Goal2Component,
    Goal2detailComponent,
    StrikethroughDirective,
    DateCountPipe,
    Goal2FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
