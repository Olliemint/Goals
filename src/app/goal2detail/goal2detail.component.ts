import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { Goal2 } from '../goal2';


@Component({
  selector: 'app-goal2detail',
  templateUrl: './goal2detail.component.html',
  styleUrls: ['./goal2detail.component.css']
})
export class Goal2detailComponent implements OnInit {
  @Input() goal!: Goal2;
  @Output() isComplete = new EventEmitter<boolean>();
  goalComplete(complete:boolean){
    this.isComplete.emit(complete)

  }
  


  constructor() { }

  ngOnInit(): void {
  }

}
