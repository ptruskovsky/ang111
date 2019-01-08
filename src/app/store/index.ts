import {widgetItemsReducer} from './reducers/widgetItemsReducer';
import {ActionReducerMap} from '@ngrx/store';
import {selectedWidgetItemReducer} from './reducers/selectedWidgetItemReducer';
import {IWidgetItem} from '../widget-item/IWidgetItem';

export interface IStore {
    widgetItems: IWidgetItem[];
    selectedWidgetItem: IWidgetItem;
}

export const reducers: ActionReducerMap<IStore> = {
    widgetItems: widgetItemsReducer,
    selectedWidgetItem: selectedWidgetItemReducer
};