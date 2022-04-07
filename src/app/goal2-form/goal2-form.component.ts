import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import * as EventEmitter from 'events';
import { Goal2 } from '../goal2';

@Component({
  selector: 'app-goal2-form',
  templateUrl: './goal2-form.component.html',
  styleUrls: ['./goal2-form.component.css']
})
export class Goal2FormComponent implements OnInit {

  newGoal2 = new Goal2(0,"","", new Date())
  
  @Output() addGoal = new EventEmitter<Goal2>();

      submitGoal(){
        this.addGoal.emit(this.newGoal2)
      }

  constructor() { }

  ngOnInit(): void {
  }

}
