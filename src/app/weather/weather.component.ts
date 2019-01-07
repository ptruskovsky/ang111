import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {IWidgetItem} from '../data/widget-items';
import {Store} from '@ngrx/store';
import {IStore} from '../store';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html'
})
export class WeatherComponent implements OnInit, OnDestroy {
  private selectedWidgetItemSubscription: Subscription;
  public widgetItem: IWidgetItem;

  constructor(private _store: Store<IStore>) { }

  ngOnInit() {
    this.selectedWidgetItemSubscription =
        this._store.select('selectedWidgetItem').subscribe((x: IWidgetItem) => this.widgetItem = x );
  }

  ngOnDestroy(): void {
    this.selectedWidgetItemSubscription.unsubscribe();
  }

}
