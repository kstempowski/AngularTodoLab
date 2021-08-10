import { NodeWithI18n } from '@angular/compiler';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularToDoLab';

  newTask:Item = {task:"", completed: false};


  allItems: Item[] = [
    {task: 'vacuum', completed: true},
    {task: 'get mail', completed: true},
    {task: 'make dinner', completed: false},
    {task: 'walk the dog', completed: true},
    {task: 'dust', completed: false}
  ];

  getItems(): Item[] {
    let list: Item[] = [];
    this.allItems.forEach((item: Item) =>{
      if(item.task !== null){

        list.push(item);
      }
    });
    return list;
  }

addTask(newForm: NgForm){
  let newTask = newForm.form.value.newTask;
  this.allItems.push({task: newTask, completed:false});
}

completeTask(item:Item){
    if(item.completed === false)
    {
      item.completed = true;
    }
    return item.completed;
  }
}


