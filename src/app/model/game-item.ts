export interface GameItem {
    id: number;
    nome:String;
    genere:String;
    page:number;
    description: string;
    rating:number;
    prezzo:number;
    selected: boolean;
    annoUscita:Date;
}
