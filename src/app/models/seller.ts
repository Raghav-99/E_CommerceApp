export class Seller{
    id:number=0;
    username:string='';
    password:string='';
    active:number=1;
    constructor(id:number=0,username:string='',password:string='',active:number=1){
        this.id=id;
        this.username=username;
        this.password=password;
        this.active=active;
    }
}
