import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToClass } from 'class-transformer';
import { Model } from 'mongoose';
import { MediaReview } from 'shared/models/media/media-review';
import { MediaReviewDto } from 'src/user/dto/media-review.dto';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class UserService {

  constructor(private readonly httpService: HttpService, 
    @InjectModel(User.name) private userModel: Model<User>) {}
  
  async getMediaList(nickname: string): Promise<MediaReview[]> {
    const data = await this.userModel.findOne({nickname});
    const res = data.media_list

    return res;
  }
  
  async getMediaReview(_id: string, media_id: number, media_type: string): Promise<MediaReview> {
    const data = await this.userModel.findById(_id);
    const res = plainToClass(MediaReview,data.media_list.find(media => media.media_id === Number(media_id) && media.media_type === media_type));

    return res;
  }

  async setMediaReview(_id: string, mediaReview: MediaReviewDto): Promise<any> {
    const data = await this.userModel.findById(_id);
    
    const mediaIndex = data.media_list.findIndex(media => media.media_id === mediaReview.media_id && media.media_type === mediaReview.media_type);

    if (mediaIndex === -1) {
      data.media_list.push({
        media_id: mediaReview.media_id,
        media_type: mediaReview.media_type,
        title: mediaReview.title,
        poster_path: mediaReview.poster_path,
        rating: mediaReview.rating,
        review: mediaReview.review,
        favourite: mediaReview.favourite,
        to_watch: mediaReview.to_watch,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    } else {
      if(mediaReview.rating == 0 && !mediaReview.favourite && !mediaReview.to_watch) {
        data.media_list = data.media_list.slice(mediaIndex,1);
      } else {
        data.media_list[mediaIndex].rating = mediaReview.rating;
        data.media_list[mediaIndex].review = mediaReview.review;
        data.media_list[mediaIndex].favourite = mediaReview.favourite;
        data.media_list[mediaIndex].to_watch = mediaReview.to_watch;
        data.media_list[mediaIndex].updatedAt = new Date();
      }

      data.markModified('media_list');
    }
    await data.save();
  }

  async getAvatar(nickname: string) : Promise<any> { 
    const data = await this.userModel.findOne({nickname});
    const res = data.avatar;
    return res;
  }

  async setAvatar(_id: string, avatar: Express.Multer.File) : Promise<any> { 
    const data = await this.userModel.findById(_id);
    data.avatar = avatar;
    data.save();
  }
}
