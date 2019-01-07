import {widgetItemsReducer} from './reducers/widgetItemsReducer';
import {IWidgetItem} from '../data/widget-items';
import {ActionReducerMap} from '@ngrx/store';
import {selectedWidgetItemReducer} from './reducers/selectedWidgetItemReducer';

export interface IStore {
    widgetItems: IWidgetItem[];
    selectedWidgetItem: IWidgetItem;
}

export const reducers: ActionReducerMap<IStore> = {
    widgetItems: widgetItemsReducer,
    selectedWidgetItem: selectedWidgetItemReducer
};