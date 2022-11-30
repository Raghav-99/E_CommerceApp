export class UserHistory {
    Username:string|null = ''
    Sellername:string|null = ''
    ProductName:string = ''
    ProductImage:string = ''

    constructor(username:string|null = '', sellername:string|null = '', productName:string = '', productImage:string = '') {
        this.Username = username,
        this.Sellername = sellername,
        this.ProductImage = productImage
        this.ProductName = productName
    }
}
