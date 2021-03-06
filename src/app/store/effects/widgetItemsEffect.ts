import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {GET_WIDGET_ITEMS_PENDING, GetWidgetItemsSuccess, GetWidgetItemsError} from '../actions/widgetItemsAction';
import {Action} from '@ngrx/store';
import {catchError, delay, map, switchMap} from 'rxjs/operators';
import {IWidgetItem} from '../../widget-item/IWidgetItem';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class WidgetItemsEffect {
    constructor(
        private _actions$: Actions,
        private http: HttpClient
    ) {}

    @Effect()
    public widgetItems$: Observable<Action> = this._actions$.pipe(
        ofType(GET_WIDGET_ITEMS_PENDING),
        switchMap(() =>
            this.http.get('http://webservice.by/widget-items.json').pipe(delay(3000),
                map((wi: IWidgetItem[]) => new GetWidgetItemsSuccess(wi)),
                catchError( () => of(new GetWidgetItemsError() ))
            )
        ),
    );

}
