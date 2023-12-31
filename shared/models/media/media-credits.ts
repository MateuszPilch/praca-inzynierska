import { Expose } from 'class-transformer';

export class MediaCredits {
  @Expose()
  cast!: Cast[];

  @Expose()
  crew!: Crew[];
}

interface Cast {
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name:string;
  order:number;
  original_name: string;
  popularity: number;
  profile_path: string;
}

interface Crew {
  adult: boolean;
  credit_id: number;
  department: string;
  gender: number;
  id: number;
  job: string;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
}