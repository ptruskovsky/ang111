import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {IStore} from '../store';
import {Store} from '@ngrx/store';
import {IWidgetItem} from '../widget-item/IWidgetItem';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html'
})
export class SocialComponent implements OnInit, OnDestroy {
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
