import { Component, OnInit } from '@angular/core';
import { Goal2 } from '../goal2';


@Component({
  selector: 'app-goal2',
  templateUrl: './goal2.component.html',
  styleUrls: ['./goal2.component.css']
})
export class Goal2Component implements OnInit {
  goals2: Goal2[] =[
    new Goal2(1,'Watch finding nemo1','Still watching1', new Date(2020,3,14)),
    new Goal2(2,'Watch finding nemo2','Still watching2', new Date(2020,3,15)),
    new Goal2(3,'Watch finding nemo3','Still watching3', new Date(2020,3,16)),
    new Goal2(4,'Watch finding nemo4','Still watching4', new Date(2020,3,17)),
    new Goal2(5,'Watch finding nemo5','Still watching5', new Date(2020,3,18)),
    new Goal2(6,'Watch finding nemo6','Still watching6', new Date(2020,3,19))
  ]
  addNewGoal(goal: Goal2){
    let goallenght= this.goals2.length;
    goal.id = goallenght +1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals2.push(goal)
  }

  completeGoal(isComplete: any,index: number){
    if (isComplete){
      this.goals2.splice(index,1)
    }
  }

  toggleDetails(index:number){
    this.goals2[index].showDescription = !this.goals2[index].showDescription;
  }
  deleteGoal(isComplete: any,index: number){
    if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.goals2[index].name}?`)
      if(toDelete){
        this.goals2.splice(index,1)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
