export class Seller{
    fullName:string='';
    username:string='';
    email:string='';
    securityQuestion:string='';
    answer:string='';
    phoneNo:string='';
    shopName:string='';
    address:string='';
    shopRegNo:string='';

    constructor(fullname?:string, Username?:string,email?:string,secQuestion?:string,Answer?:string,Phoneno?:string,
    Shopname?:string,Shopno?:string,address?:string){
        this.fullName=fullname||'';
        this.username=Username||'';
        this.email=email||'';
        this.securityQuestion=secQuestion||'';
        this.answer=Answer||'';
        this.phoneNo=Phoneno||'';
        this.address=address||'';
        this.shopName=Shopname||'';
        this.shopRegNo=Shopno||'';

    }
}
