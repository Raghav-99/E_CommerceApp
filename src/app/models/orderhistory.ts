export class Orderhistory {
    orderDate: string = '';
    username: string | null = ''
    sellername: string | null = ''
    pId: number = 0;
    quantityOrdered: number = 0;

    constructor(orderDate: string, username: string | null, sellername: string|null, pId:number ,quantityOrdered: number) {
        this.orderDate = orderDate;
        this.username = username;
        this.sellername = sellername;
        this.pId = pId;
        this.quantityOrdered = quantityOrdered;
    }
}
