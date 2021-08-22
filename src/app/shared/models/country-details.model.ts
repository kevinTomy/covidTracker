export class CountryDetails {
    constructor(
    public country:string,
    public cases:number,
    public deaths:number,
    public recovered:number,
    public tests:number,
    public population:number ,
    public flag:any
    ){}
}
