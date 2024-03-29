"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieModule = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const movie_controller_1 = require("./movie.controller");
const movie_details_service_1 = require("./movie-details/movie-details.service");
const movie_credits_service_1 = require("./movie-credits/movie-credits.service");
const movie_page_service_1 = require("./movie-page/movie-page.service");
const auth_module_1 = require("../auth/auth.module");
let MovieModule = class MovieModule {
};
exports.MovieModule = MovieModule;
exports.MovieModule = MovieModule = __decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule, auth_module_1.AuthModule],
        controllers: [movie_controller_1.MovieController],
        providers: [movie_details_service_1.MovieDetailsService, movie_credits_service_1.MovieCreditsService, movie_page_service_1.MoviePageService],
    })
], MovieModule);
//# sourceMappingURL=movie.module.js.map