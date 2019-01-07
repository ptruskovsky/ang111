import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {GET_WIDGET_ITEMS_PENDING, GetWidgetItemsSuccess, GetWidgetItemsError} from '../actions/widgetItemsAction';
import {Action} from '@ngrx/store';
import {catchError, delay, map, switchMap} from 'rxjs/operators';
import {IWidgetItem, widgetItems} from '../../data/widget-items';

@Injectable()
export class WidgetItemsEffect {
    constructor(
        private _actions$: Actions
    ) {}

    @Effect()
    public widgetItems$: Observable<Action> = this._actions$.pipe(
        ofType(GET_WIDGET_ITEMS_PENDING),
        switchMap(() =>
            of(widgetItems).pipe(delay(3000),
                map((wi: IWidgetItem[]) => new GetWidgetItemsSuccess(wi)),
                catchError( () => of(new GetWidgetItemsError() ))
            )
        ),
    );

}
