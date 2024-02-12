import { Component } from '@angular/core';

@Component({
  selector: 'app-practical14',
  templateUrl: './practical14.component.html',
  styleUrls: ['./practical14.component.css']
})
export class Practical14Component {
  hideDiv: boolean = false;

  constructor() { }

  toggleDivVisibility() {
    this.hideDiv = !this.hideDiv;
  }
}
