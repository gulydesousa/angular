import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./entities/user.entity";
import { Model } from "mongoose";

@Injectable()
export class AuthService {
  //Se inyecta el modelo de usuario
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    //TODO: Encriptar la contraseña
    //TODO: Guardar el usuario
    //TODO: Generar JWT
 
    try{
      const createdUser = new this.userModel(createUserDto);
      //Fijate que el metodo save es asincrono para poder esperar a que se guarde el usuario
      //Sino no se podria retornar el usuario creado
      return await createdUser.save();

    }
    catch(error){
      console.log(error.code);

      switch(error.code){
        case 11000:
          throw new BadRequestException(`${createUserDto.email} already exists`);
        default:
          throw new Error('Internal server error');
      }
    }

  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateUserDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
