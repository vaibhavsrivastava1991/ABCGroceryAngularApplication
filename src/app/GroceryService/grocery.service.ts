import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { IGroceryModel } from '../GroceryModel/grocery.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class GroceryService
{
    constructor(private _http: Http)
    {

    }

    getGroceryList() :  Observable<IGroceryModel[]>
    {
      return  this._http.get("http://localhost:64784/api/grocery/GroceryList")
                        .map((response : Response) => <IGroceryModel[]>response.json())
                        .catch(this.handleError);
    }

   handleError(error: Response)
    {
         console.error(error);
         return Observable.throw(error);
    }
}