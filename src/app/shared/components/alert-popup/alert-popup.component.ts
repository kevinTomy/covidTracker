import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-popup',
  templateUrl: './alert-popup.component.html',
  styleUrls: ['./alert-popup.component.scss']
})
export class AlertPopupComponent implements OnInit {
  @Input() alert:boolean = false;
  @Input() message:string = "";
  @Input() success:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
