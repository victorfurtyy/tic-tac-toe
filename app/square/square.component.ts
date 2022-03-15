import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton *ngIf="!value">{{ value }}</button>
    <button nbButton hero status="success" *ngIf="value == 'X'">{{ value }}</button>
    <button nbButton hero status="info" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: [`
  button {
    border: none;
    height: 100%;
    width: 100%;
    font-size: 6em !important;
  }`]
})
export class SquareComponent {

  @Input() value!: 'X' | 'O';

}
