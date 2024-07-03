export interface CardData {
    id: number;
    route: string;
    date: string;
    payment: number;
    container: number;
    truck: number;
    amount: number;
    status: number;
}


export interface ListCardData {
    cards: CardData[];
}