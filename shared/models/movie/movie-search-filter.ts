export class MovieSearchFilter {
  certification!: {
    gte: string;
    lte: string;
  };
  certification_country!:string;
  language!: string;
  page: number = 1;
  primary_release_year!:number;
  primary_release_date!: {
    gte: Date;
    lte: Date;
  };
  region!: string;
  release_date!: {
    gte: Date;
    lte: Date;
  };
  sort_by!: string;
  vote_average!: {
    gte: number;
    lte: number;
  };
  vote_count!: {
    gte: number;
    lte: number;
  };
  watch_region!: string;
  with_genres!: string;
  with_origin_country!: string;
  with_release_type!: number;
  with_runtime!: {
    gte: number;
    lte: number;
  };
  year!: number;

  setFilter(property: keyof any, value: any): void {
    (this as any)[property] = value;
  }

  clearFilter(): void {
    Object.keys(this).forEach((i) => (this as any)[i] = null);
    this.page = 1;
  }
}