import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {catchError, map, switchMap} from 'rxjs/operators';
import {IWidgetItem, widgetItems} from '../../data/widget-items';
import {
    GET_SELECTED_WIDGET_ITEM_PENDING, GetSelectedWidgetItemError,
    GetSelectedWidgetItemSuccess
} from '../actions/selectedWidgetItemAction';

@Injectable()
export class SelectedWidgetItemEffect {
    constructor(
        private _actions$: Actions
    ) {}

    @Effect()
    public selectedWidgetItem$: Observable<Action> = this._actions$.pipe(
        ofType(GET_SELECTED_WIDGET_ITEM_PENDING),
        switchMap((action: any) =>
            of(widgetItems).pipe(
                map((wi: IWidgetItem[]) => {
                    const filteredItems: IWidgetItem[] = wi.filter((value: IWidgetItem) =>  value.id === action.payload);
                    return new GetSelectedWidgetItemSuccess(filteredItems[0]);
                } ),
                catchError( () => of(new GetSelectedWidgetItemError() ))
            )
        ),
    );

}
