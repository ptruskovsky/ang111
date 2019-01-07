import {IWidgetItem} from '../../data/widget-items';

export const GET_SELECTED_WIDGET_ITEM_PENDING = 'GET_SELECTED_WIDGET_ITEM_PENDING';
export const GET_SELECTED_WIDGET_ITEM_SUCCESS = 'GET_SELECTED_WIDGET_ITEM_SUCCESS';
export const GET_SELECTED_WIDGET_ITEM_ERROR = 'GET_SELECTED_WIDGET_ITEM_ERROR';

export class GetSelectedWidgetItemPending {
    public  readonly type: string  =  GET_SELECTED_WIDGET_ITEM_PENDING;
    public constructor(public payload: string) {}
}

export class GetSelectedWidgetItemSuccess {
    public  readonly type: string  =  GET_SELECTED_WIDGET_ITEM_SUCCESS;
    public constructor(public  payload: IWidgetItem) {
    }

}

export class GetSelectedWidgetItemError {
    public  readonly type: string  =  GET_SELECTED_WIDGET_ITEM_ERROR;
}
