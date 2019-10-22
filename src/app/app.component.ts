import { Component, OnInit } from '@angular/core';
import { IGroceryModel } from './GroceryModel/grocery.model';
import { GroceryService } from './GroceryService/grocery.service';
import { List } from 'linqts';
import { stringify } from '@angular/compiler/src/util';
import { parse } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  
  ngOnInit(): void {

   this._groceryService.getGroceryList()
                             .subscribe((employeeData) => 
                             {
                              this.groceryData = employeeData
                             },
                                       (error) => console.log('Problem with service. Please try again later!!'));
                                       }

  title = 'GroceryCartApplication';
  groceryData: IGroceryModel[];
  groceryItemAddedCount:number=0;
  addedIds: string = '';
 iGroceryModel: IGroceryModel;
  
  constructor(private _groceryService:GroceryService)
  {
    
  }

  onGroceryItemButtonClick(value:any)
  {
    
    
    if(value != null)
         {
           if(this.addedIds != null && this.addedIds.length>0 && this.addedIds.indexOf(value)>-1)
           {
            this.addedIds = this.addedIds.replace(value,'');
           }
           else
           {
             this.addedIds = value+","+this.addedIds;
           }
         }

         if(this.addedIds != null && this.addedIds != '')
         {
          this.groceryItemAddedCount = 0;
           this.addedIds.split(',').forEach(element => {
             if(element != '' && element != undefined && element != ',')
             {
               debugger ; 
              this.groceryItemAddedCount = this.groceryItemAddedCount + 1;
             }
           });
         
         }
         else
         {
               this.groceryItemAddedCount = null;        
         }
  }

  getCheckoutButtonClick()
  {
   if(this.groceryItemAddedCount <= 0 || this.groceryItemAddedCount == undefined || this.groceryItemAddedCount == null)
    {
          alert("No item in cart!!");
    }
    else
    {
      let totalPrice = 0;
      this.addedIds.split(',').forEach(element => {
        if(element != '' && element != undefined && element != ',')
        {
          if(element != null && element != undefined && element != '')
          {
           var items = this.groceryData.find(s => s.ProductId === parseInt(element));
              totalPrice = totalPrice+items.Price;
          }        
        }
      });
      alert("Total amount payed "+totalPrice+"\nThank you for shopping with us.")
    }
  }
}
