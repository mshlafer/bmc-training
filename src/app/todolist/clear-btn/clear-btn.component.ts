import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clear-btn',
  templateUrl: './clear-btn.component.html',
  styleUrls: ['./clear-btn.component.css']
})
export class ClearBtnComponent {
  @Input() label: string;
  @Output() clear = new EventEmitter<any>();
}
