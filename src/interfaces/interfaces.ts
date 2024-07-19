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
    camionId: number;
    noEconomico: number;
    tanqueActual: number;
}

export interface CargaDieselCardData {
    cargaId: number;
    fecha: string;
    rendimientoCarga: number;
    rendimientoEsperado: number;
    sellos: string,
    segundoSellos: string;
}

export interface DieselData{
    camionId: number;
    noEconomico: number;
    tanqueActual: number;
    cargasDiesel: CargaDieselCardData[];
    proveedores: Proveedores[];
    metodosPago: MetodoPago[];
    tipoCombustible: TipoCombustible[];
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

export interface Proveedores {
    proveedorId: number;
    nComercial: string;
}

export interface MetodoPago {
    metodoId: number;
    nombre: string;
}

export interface TipoCombustible {
    tipoCombustibleId: number;
    nombreTipo: string;
    status: boolean;
    seguimientoRendimiento: boolean;
}
