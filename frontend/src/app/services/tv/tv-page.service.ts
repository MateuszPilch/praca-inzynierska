import * as qs from 'qs';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router, ResolveFn, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MediaData } from 'shared/models/media/media-data';
import { TvSearchFilter } from 'shared/models/tv/tv-search-filter';

@Injectable({
  providedIn: 'root'
})
export class TvPageService {

  tvFilter!: TvSearchFilter;

  nowDate: Date;
  todayDateString: string;
  upcomingDateString: string;


  constructor(private http: HttpClient, private router: Router) {
    this.tvFilter = new TvSearchFilter;
    
    this.nowDate = new Date();
    this.todayDateString = this.nowDate.toISOString().split('T')[0];
    this.upcomingDateString = this.nowDate.setMonth(this.nowDate.getMonth() + 6).toString();

  }
  
  getTvData(filter: TvSearchFilter): Observable<MediaData> {
    const params = qs.stringify(filter, { encode: false });
    return this.http.get<MediaData>(`http://localhost:3000/api/tv?${params}`);
  }

  setFilter(property: keyof any, value: any): void {
    this.tvFilter.setFilter(property, value);
  }

  applyFilter(): void {
    this.router.navigate(['tv']);
  }

  changePage(page: number): void {
    this.tvFilter.setFilter('page', page);
    this.router.navigate(['tv']);
  }

  highestVoteFilter(): void {
    this.tvFilter.clearFilter();
    this.tvFilter.setFilter('sort_by', 'vote_average.desc');
    this.tvFilter.setFilter('vote_count.gte', 300);
    this.router.navigate(['tv']);
  }

  popularityFilter(): void {
    this.tvFilter.clearFilter();
    this.tvFilter.setFilter('sort_by', 'popularity.desc');
    this.router.navigate(['tv']);
  }

  upcomingFilter(): void {
    this.tvFilter.clearFilter();
    this.tvFilter.setFilter('first_air_date.gte', this.todayDateString);
    this.tvFilter.setFilter('first_air_date.lte', this.upcomingDateString);
    this.tvFilter.setFilter('sort_by', 'popularity.desc');
    this.router.navigate(['tv']);
  }
}

export const tvPageResolver: ResolveFn<MediaData> = () => {
  return inject(TvPageService).getTvData(inject(TvPageService).tvFilter);
};
