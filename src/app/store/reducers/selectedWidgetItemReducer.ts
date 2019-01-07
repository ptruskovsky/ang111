import {IWidgetItem} from '../../data/widget-items';
import {GET_SELECTED_WIDGET_ITEM_ERROR, GET_SELECTED_WIDGET_ITEM_PENDING, GET_SELECTED_WIDGET_ITEM_SUCCESS}
from '../actions/selectedWidgetItemAction';

const initialState: IWidgetItem = {} as IWidgetItem;

export function selectedWidgetItemReducer(state = initialState, action: any) {
    // tslint:disable-next-line
    //debugger;
    switch (action.type) {
        case GET_SELECTED_WIDGET_ITEM_SUCCESS:
            return action.payload;
        case GET_SELECTED_WIDGET_ITEM_PENDING:
            return state;
        case GET_SELECTED_WIDGET_ITEM_ERROR:
            return state;
        default:
            return state;
    }

}