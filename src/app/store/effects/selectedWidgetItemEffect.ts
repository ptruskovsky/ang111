import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {catchError, map, switchMap} from 'rxjs/operators';
import {
    GET_SELECTED_WIDGET_ITEM_PENDING, GetSelectedWidgetItemError,
    GetSelectedWidgetItemSuccess
} from '../actions/selectedWidgetItemAction';
import {IWidgetItem} from '../../widget-item/IWidgetItem';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SelectedWidgetItemEffect {
    constructor(
        private _actions$: Actions,
        private http: HttpClient
    ) {}

    @Effect()
    public selectedWidgetItem$: Observable<Action> = this._actions$.pipe(
        ofType(GET_SELECTED_WIDGET_ITEM_PENDING),
        switchMap((action: any) =>
            this.http.get('http://webservice.by/widget-items.json').pipe(
                map((wi: IWidgetItem[]) => {
                    const filteredItems: IWidgetItem[] = wi.filter((value: IWidgetItem) =>  value.id === action.payload);
                    return new GetSelectedWidgetItemSuccess(filteredItems[0]);
                } ),
                catchError( () => of(new GetSelectedWidgetItemError() ))
            )
        ),
    );

}
