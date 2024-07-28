import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { JwtPayload } from "../interfaces/jwt-payload";
import { AuthService } from "../auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private authService: AuthService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    //console.log('request', request);
    const token = this.extractTokenFromHeader(request);
    console.log("token", token);

    if (!token) {
      throw new UnauthorizedException("There is no token in the request");
    }

    try {
      //Si el token no se ha generado con el secret que tenemos en el servidor
      //, se lanzará una excepción
      const payload = await this.jwtService.verifyAsync<JwtPayload>(token, {
        secret: process.env.JWT_SECRET,
      });
      //console.log("payload", payload);
      const user = await this.authService.findUserById(payload.id);
      if (!user) throw new UnauthorizedException("User not found"); 
      if (!user.isActive) throw new UnauthorizedException("User is not active");
      request["user"] = user;
      
    } catch (error) {
      throw new UnauthorizedException("Invalid token");
    }

    return Promise.resolve(true);
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers["authorization"]?.split(" ") ?? [];
    return type === "Bearer" ? token : undefined;
  }
}
