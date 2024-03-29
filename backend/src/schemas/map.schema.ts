import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

class Image {

  @Prop()
  encoding: string;

  @Prop()
  mimetype: string;

  @Prop()
  buffer: Buffer;

  @Prop()
  size: number;
}

class MapData {

  @Prop()
  _id: string;

  @Prop()
  user_id: string;
  
  @Prop()
  name: string;

  @Prop()
  runtime: string;

  @Prop()
  episode: string;

  @Prop()
  description: string;

  @Prop()
  center: number[];

  @Prop()
  radius: number;

  @Prop()
  image: Image;
}

@Schema({
  timestamps: true,
})
export class Map extends Document {

  @Prop()
  media_id: number;

  @Prop()
  media_type: string;

  @Prop()
  map_data: MapData[]
}

export const MapSchema = SchemaFactory.createForClass(Map);