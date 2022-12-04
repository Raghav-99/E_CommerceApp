export class User{
    username:string="";
    fullName:string = ""
    phoneNumber:string = ""
    address:string = ""
    secQuestion:string = ""
    answer:string = ""
    modifiedBy:string = "";
    constructor(username:string='',fullName:string='', phoneNo:string = '', address:string = '', secQuestion:string = '', answer:string = '', modifiedBy:string = "") {
        this.username = username
        this.fullName = fullName
        this.phoneNumber = phoneNo
        this.address = address
        this.secQuestion = secQuestion
        this.answer = answer
        this.modifiedBy = modifiedBy
    }
}