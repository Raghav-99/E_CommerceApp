export class Commodity {
    username:string|null = ''
    pId:number = 0

    constructor(username:string|null , pId = 0) {
        this.username = username;
        this.pId = pId;
    }
}
