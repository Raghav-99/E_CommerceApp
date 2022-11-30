export class Orderhistory {
    OrderDate: number = 0;
    Username: string | null = ''
    Sellername: string = ''
    PId: number = 0;
    QuantityOrdered: number = 0;

    constructor(orderDate: number, username: string | null, sellername: string, pId:number ,quantityOrdered: number) {
        this.OrderDate = orderDate;
        this.Username = username;
        this.Sellername = sellername;
        this.PId = pId;
        this.QuantityOrdered = quantityOrdered;
    }
}
