import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class User {
    @Prop({unique: true, required: true})
    email: string;

    @Prop({required: true})
    name: string;

    @Prop({minlength: 6, required: true})
    password: string;
    
    @Prop({default: true})
    isActive: boolean;

    @Prop({type: [String], default: []})
    roles: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);

//Lo siguiente es exponer el esquema para que pueda ser utilizado en otros módulos
//Eso se hace en el módulo en nuestro caso en el auth.module.ts
