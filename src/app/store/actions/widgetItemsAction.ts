import {IWidgetItem} from '../../data/widget-items';

export const GET_WIDGET_ITEMS_PENDING = 'GET_WIDGET_ITEMS_PENDING';
export const GET_WIDGET_ITEMS_SUCCESS = 'GET_WIDGET_ITEMS_SUCCESS';
export const GET_WIDGET_ITEMS_ERROR = 'GET_WIDGET_ITEMS_ERROR';

export class GetWidgetItemsPending {
    public  readonly type: string  =  GET_WIDGET_ITEMS_PENDING;
}

export class GetWidgetItemsSuccess {
    public  readonly type: string  =  GET_WIDGET_ITEMS_SUCCESS;
    public constructor(public  payload: IWidgetItem[]) {
    }

}

export class GetWidgetItemsError {
    public  readonly type: string  =  GET_WIDGET_ITEMS_ERROR;
}
