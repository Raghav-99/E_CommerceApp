export class User{
    Username:string='';
    DateOfBirth:string = ""
    SecQuestion = ""
    ModifiedBy:string = ""
    Answer:string = ""
    constructor(username:string='',dob:string='', secQuestion:string = '', modifiedBy:string = '', answer:string = ''){
        this.Username=username;
        this.DateOfBirth = dob;
        this.SecQuestion = secQuestion;
        this.ModifiedBy = modifiedBy;
        this.Answer = answer
    }
}