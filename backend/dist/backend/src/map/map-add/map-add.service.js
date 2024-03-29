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
exports.MapAddService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const map_schema_1 = require("../../schemas/map.schema");
let MapAddService = class MapAddService {
    constructor(mapModel) {
        this.mapModel = mapModel;
    }
    async addMediaLocation(user_id, media_type, media_id, mapData, image) {
        const media = await this.mapModel.findOne({ media_type, media_id });
        const coords = mapData.center.toString().split(',').map(coord => Number(coord));
        if (media) {
            media.map_data.push({
                _id: new mongoose_2.default.mongo.ObjectId().toString(),
                user_id: user_id.toString(),
                name: mapData.name,
                runtime: mapData.runtime,
                episode: mapData.episode,
                description: mapData.description,
                center: coords,
                radius: Number(mapData.radius),
                image: image
            });
            media.markModified('map_data');
            await media.save();
        }
        else {
            await this.mapModel.create({
                media_type,
                media_id,
                map_data: {
                    _id: new mongoose_2.default.mongo.ObjectId().toString(),
                    user_id: user_id.toString(),
                    name: mapData.name,
                    runtime: mapData.runtime,
                    episode: mapData.episode,
                    description: mapData.description,
                    center: coords,
                    radius: Number(mapData.radius),
                    image: image
                },
            });
        }
    }
};
exports.MapAddService = MapAddService;
exports.MapAddService = MapAddService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(map_schema_1.Map.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MapAddService);
//# sourceMappingURL=map-add.service.js.map