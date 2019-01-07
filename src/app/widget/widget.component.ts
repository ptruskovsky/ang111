import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import { IWidgetItem} from '../data/widget-items';
import {IStore} from '../store';
import {GetWidgetItemsPending} from '../store/actions/widgetItemsAction';
import {Store} from '@ngrx/store';
import {GetSelectedWidgetItemPending} from '../store/actions/selectedWidgetItemAction';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html'
})
export class WidgetComponent implements OnInit, OnDestroy {
  public items: IWidgetItem[];
  public itemsTypes: string[];
  public basicSubscription: Subscription;
  public widgetItemType: string;

  constructor(private _store: Store<IStore>) { }

  private getItemsTypes(items: IWidgetItem[]): string[] {
    const result: string[] = [];
    items.forEach((item: IWidgetItem) => {
      if (!result.includes(item.type)) {
        result.push(item.type);
      }
    });
    return result;
  }

  ngOnInit() {
    this._store.dispatch(new GetWidgetItemsPending());
    this.basicSubscription = this._store.select('widgetItems').subscribe(x => {
      this.items = x;
      this.itemsTypes = this.getItemsTypes(x);
      if (x.length > 0) {
        const first: IWidgetItem = this.items[0];
        this.widgetItemType = first.type;
        this.nextSelectedWidgetItem(first);
      }
    });
}

  ngOnDestroy(): void {
    this.basicSubscription.unsubscribe();
  }

  // when clicking on item
  public nextSelectedWidgetItem(item: IWidgetItem): void {
    this._store.dispatch(new GetSelectedWidgetItemPending(item.id));
  }
  // when clicking on type link
  public changeWidgetItemType(selectedType: string): void {
    if (!selectedType) {
      return;
    }
    this.widgetItemType = selectedType;
    // refresh subscribers
    if (this.items) {
      const typedItems: IWidgetItem[] = this.items.filter(x => x.type.toLowerCase() === selectedType.toLowerCase());
      if (typedItems.length > 0) {
        this.nextSelectedWidgetItem(typedItems[0]);
      }
    }
  }

}
