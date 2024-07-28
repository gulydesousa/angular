import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";

import * as bcryptjs from "bcryptjs";
import { InjectModel } from "@nestjs/mongoose";
import { JwtService } from "@nestjs/jwt";
import { Model } from "mongoose";

import { JwtPayload } from "./interfaces/jwt-payload";
import { LoginResponse } from "./interfaces/login-response";
import { RegisterUserDto, CreateUserDto, LoginDto, UpdateUserDto } from "./dto";
import { User } from "./entities/user.entity";

@Injectable()
export class AuthService {
  //Se inyecta el modelo de usuario
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService
  ) {}

  //Metodo para obtener el token
  getJwtToken(payload: JwtPayload) {
    console.log('JWT_SECRET:', process.env.JWT_SECRET);
    const token = this.jwtService.sign(payload);

    console.log(token);
    return token;
  }

  async register(registerUserDto: RegisterUserDto): Promise<LoginResponse> {
    const { name, email, password } = registerUserDto;
    const createUserDto = new CreateUserDto();
    Object.assign(createUserDto, { name, email, password });

    const user = await this.create(createUserDto);
    console.log(user);

    return {
      user,
      token: this.getJwtToken({ id: user._id }),
    };    
  }

  async login(loginDto: LoginDto): Promise<LoginResponse> {
    const { email, password } = loginDto;

    //Validamos que el login exista
    //Para eso buscamos un usuario con el email proporcionado
    //Si no existe el usuario lanzamos una excepción
    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new UnauthorizedException("Invalid credentials - email");
    }

    //El login existe, ahora validamos la contraseña enviada contra la que tiene el usuario.
    //Para eso usamos el metodo compare de bcryptjs que compara la contraseña en texto plano
    //con la contraseña encriptada del usuario
    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException("Invalid credentials - password");
    }

    //Ya sabemos que el correo y la contraseña son correctos, hacen match
    //Ahora vamos a crear un token de autenticación
    const { password: _, ...userWithoutPassword } = user.toJSON();

    //El token se crea con el id del usuario
    return {
      user: userWithoutPassword,
      token: this.getJwtToken({ id: user.id }),
    };
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      //*** Encriptar la contraseña ***
      //Desestructuramos el objeto para obtener la contraseña en password
      //y el resto de los datos del usuario en userData
      const { password, ...userData } = createUserDto;

      //Generamos un hash de la contraseña
      //el await es necesario porque el metodo hash es asincrono
      //y necesitamos esperar a que termine para poder continuar
      const hashedPassword = await bcryptjs.hash(password, 10);

      //Creamos un nuevo objeto con la contraseña encriptada
      const createUserDtoWithHashedPassword = new this.userModel({
        password: hashedPassword,
        ...userData,
      });

      //Creamos un objeto intermedio para retornar el usuario sin la contraseña
      //return await createUserDtoWithHashedPassword.save();
      const user = await createUserDtoWithHashedPassword.save();
      //Fijate que el metodo save es asincrono para poder esperar a que se guarde el usuario
      //Sino no se podria retornar el usuario creado
      //La propieda password la renombramos a _ para que no se incluya en el objeto
      const { password: _, ...userWithoutPassword } = user.toObject();
      return userWithoutPassword;
    } catch (error) {
      console.log(error.code);

      switch (error.code) {
        case 11000:
          throw new BadRequestException(
            `${createUserDto.email} already exists`
          );
        default:
          throw new Error("Internal server error");
      }
    }
  }

  findAll() {
    return this.userModel.find();
  }

  async findUserById(id: string) {
    const user = await this.userModel.findById(id);
    const { password, ...userWithoutPassword } = user.toJSON();
    return userWithoutPassword;
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
