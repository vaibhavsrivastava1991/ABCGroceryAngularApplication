export interface IGroceryModel
{
    ProductId:number;
    ProductName:string;
    ProductImage:string;
    Price:number;
}

export class GroceryDbModel implements IGroceryModel
{
 constructor(public ProductId : number, public ProductName:string, public Price:number , public ProductImage:string)
 {
     
 }
}