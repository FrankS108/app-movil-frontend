export interface CardData {
    id: number;
    route: string;
    date: string;
    payment: number;
    container: string;
    truck: number;
    amount: number;
    status: number;
    extras?: Extra[];
}

export interface ListCardData {
    cards: CardData[];
}

export interface Extra {
    name: string;
    amount: number;
    m0: number;
    m1: number;
    divisa: string;
}

export interface MessageData {
    isError: boolean; // Indica si es un mensaje de error o no
    message: string; // Contenido del mensaje
}

export interface CardVencimientosData {
    id: number;
    expiration: string;
    date: string;
    days: string;
    status: string;
}

export interface ListCardsVencimientosData{
    cards: CardVencimientosData[];
}