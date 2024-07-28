//Interfaz para el payload del token con el id del usuario, la fecha de creacion y fecha de expiracion
export interface JwtPayload {
     id: string;
     iat?: number;
     exp?: number;
}