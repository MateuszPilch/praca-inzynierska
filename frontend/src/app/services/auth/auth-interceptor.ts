import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (this.authService.isAuthenticated()) {
      const cloned = req.clone({
          headers: req.headers.set("Authorization","Bearer " + this.authService.getAuthToken())
      });
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}