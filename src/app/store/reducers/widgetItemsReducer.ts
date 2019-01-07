import {IWidgetItem} from '../../data/widget-items';
import {GET_WIDGET_ITEMS_ERROR, GET_WIDGET_ITEMS_PENDING, GET_WIDGET_ITEMS_SUCCESS} from '../actions/widgetItemsAction';

const initialState: IWidgetItem[] = [];

export function widgetItemsReducer(state = initialState, action: any) {
    // tslint:disable-next-line
    //debugger;
    switch (action.type) {
        case GET_WIDGET_ITEMS_SUCCESS:
            return action.payload;
        case GET_WIDGET_ITEMS_PENDING:
            return state;
        case GET_WIDGET_ITEMS_ERROR:
            return state;
        default:
            return state;
    }

}
