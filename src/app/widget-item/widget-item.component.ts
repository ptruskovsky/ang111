import { Component, Input, OnInit } from '@angular/core';
import {IWidgetItem} from './IWidgetItem';


@Component({
  selector: 'app-widget-item',
  templateUrl: './widget-item.component.html',
  styleUrls: ['./widget-item.component.css']
})
export class WidgetItemComponent implements OnInit {
  @Input()
  public widgetItem: IWidgetItem;
  constructor() { }

  ngOnInit() {
  }

}
