"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieDetailsService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
const media_details_1 = require("../../../../shared/models/media/media-details");
const media_images_1 = require("../../../../shared/models/media/media-images");
const class_transformer_1 = require("class-transformer");
let MovieDetailsService = class MovieDetailsService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async getMovieDetails(movie_id) {
        const url = `https://api.themoviedb.org/3/movie/${movie_id}?language=pl-PL`;
        const headers = {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.TMDB_API_CRED}`
            }
        };
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url, headers));
        const res = (0, class_transformer_1.plainToInstance)(media_details_1.MediaDetails, data, { excludeExtraneousValues: true });
        return res;
    }
    async getMovieImages(movie_id) {
        const url = `https://api.themoviedb.org/3/movie/${movie_id}/images?include_image_language=null`;
        const headers = {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.TMDB_API_CRED}`,
            }
        };
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url, headers));
        const res = (0, class_transformer_1.plainToInstance)(media_images_1.MediaImages, data, { excludeExtraneousValues: true });
        return res;
    }
};
exports.MovieDetailsService = MovieDetailsService;
exports.MovieDetailsService = MovieDetailsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], MovieDetailsService);
//# sourceMappingURL=movie-details.service.js.map