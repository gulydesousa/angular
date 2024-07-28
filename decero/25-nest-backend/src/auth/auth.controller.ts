import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RegisterUserDto, CreateUserDto, UpdateUserDto, LoginDto } from "./dto";
import { AuthGuard } from "./guards/auth.guard";
import { User } from "./entities/user.entity";
import { LoginResponse } from "./interfaces/login-response";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @UseGuards(AuthGuard)
  @Get("/check-token")
  checkToken(@Request() req: Request) : LoginResponse {
    const user = req['user'] as User;
    return {
      user: user,
      token: this.authService.getJwtToken({id: user._id})
    };   
  }

  //Cada vez que lo llamas genera un nuevo token
  @UseGuards(AuthGuard)
  @Get()
  findAll(@Request() req: Request) {
    const user = req['user'];
    return this.authService.findAll();    
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

  @Post("/login")
  login(@Body() LoginDto: LoginDto) {
    return this.authService.login(LoginDto);
  }

  @Post("register")
  register(@Body() registerUserDto: RegisterUserDto) {
    return this.authService.register(registerUserDto);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.authService.update(+id, updateUserDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.authService.remove(+id);
  }
}
