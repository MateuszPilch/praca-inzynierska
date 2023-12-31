import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ResolveFn, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MediaCredits } from 'shared/models/media/media-credits';

@Injectable({
  providedIn: 'root'
})
export class TvCreditsService {
  
  constructor(private http: HttpClient) {}
  
  getTvCredits(id: string): Observable<MediaCredits> {
    return this.http.get<MediaCredits>(`http://localhost:3000/api/tv/${id}/credits`);
  }

  getTvCreditsShort(id: string): Observable<MediaCredits> {
    return this.http.get<MediaCredits>(`http://localhost:3000/api/tv/${id}/credits_short`);
  }
}

export const tvCreditsResolver: ResolveFn<MediaCredits> = (route: ActivatedRouteSnapshot) => {
  return inject(TvCreditsService).getTvCredits(route.paramMap.get('id')!);
};

export const tvCreditsResolverShort: ResolveFn<MediaCredits> = (route: ActivatedRouteSnapshot) => {
  return inject(TvCreditsService).getTvCreditsShort(route.paramMap.get('id')!);
};