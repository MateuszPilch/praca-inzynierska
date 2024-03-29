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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieController = void 0;
const common_1 = require("@nestjs/common");
const movie_details_service_1 = require("./movie-details/movie-details.service");
const movie_credits_service_1 = require("./movie-credits/movie-credits.service");
const movie_search_filter_1 = require("../../../shared/models/movie/movie-search-filter");
const movie_page_service_1 = require("./movie-page/movie-page.service");
let MovieController = class MovieController {
    constructor(moviePageService, movieDetailsService, movieCreditsService) {
        this.moviePageService = moviePageService;
        this.movieDetailsService = movieDetailsService;
        this.movieCreditsService = movieCreditsService;
    }
    getMovieData(params) {
        return this.moviePageService.getMovieData(params);
    }
    getMovieGenres() {
        return this.moviePageService.GetMovieGenres();
    }
    getMovieDetails(id) {
        return this.movieDetailsService.getMovieDetails(id);
    }
    getMovieImages(id) {
        return this.movieDetailsService.getMovieImages(id);
    }
    getMovieCredits(id) {
        return this.movieCreditsService.getMovieCredits(id);
    }
    getMovieCreditsShort(id) {
        return this.movieCreditsService.getMovieCreditsShort(id);
    }
};
exports.MovieController = MovieController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [movie_search_filter_1.MovieSearchFilter]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "getMovieData", null);
__decorate([
    (0, common_1.Get)('genres'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "getMovieGenres", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "getMovieDetails", null);
__decorate([
    (0, common_1.Get)(':id/images'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "getMovieImages", null);
__decorate([
    (0, common_1.Get)(':id/credits'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "getMovieCredits", null);
__decorate([
    (0, common_1.Get)(':id/credits_short'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "getMovieCreditsShort", null);
exports.MovieController = MovieController = __decorate([
    (0, common_1.Controller)('movie'),
    __metadata("design:paramtypes", [movie_page_service_1.MoviePageService,
        movie_details_service_1.MovieDetailsService,
        movie_credits_service_1.MovieCreditsService])
], MovieController);
//# sourceMappingURL=movie.controller.js.map