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

export interface CardDieselData{
    noEconomico: number;
    porcentaje: number;
    cargas: CargaDieselCardData[];
}

export interface CargaDieselCardData {
    cargaID: number;
    fecha: string;
    rendimientoCarga: number;
    rendimientoEsperado: number;
}

export interface ListCargasDieselData {
    cards: CargaDieselCardData[];
}

export interface ListcardsDieselData {
    cards: CardDieselData[];
}



export interface LoginData {
    user: string;
    password: string;
}

export interface Auth {
    id: number;
    name: string;
    token: string;
}

export interface DieselFormData {
    provider: string;
    totalPrice: number;
    currency: string;
    gallons: number;
    date: string;
    time: string;
    odometer: string;
    ecmTravel: number;
    ecmGallons: number;
}
