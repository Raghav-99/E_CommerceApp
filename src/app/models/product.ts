
export class Product{
    pId:number=0;
    productName:string='';
    price:number=0;
    productDescription:string='';
    productType:string='';
    imageUrl:string='';
    productCount:number=0;

    constructor(pId:number=0, productName:string='', price:number=0, productDescription:string='',productType:string='',imageUrl:string='', productCount:number=0){
        this.pId=pId;
        this.productName=productName;
        this.price=price;
        this.productDescription=productDescription;
        this.productType=productType;
        this.imageUrl=imageUrl;
        this.productCount=productCount
    }
}