import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviePageComponent } from './components/movie/movie-page/movie-page.component';
import { MovieDetailsComponent } from './components/movie/movie-details/movie-details.component';
import { movieDetailsResolver, movieImagesResolver, movieLocationCountResolver } from './services/movie/movie-details.service';
import { MovieCreditsComponent } from './components/movie/movie-credits/movie-credits.component';
import { movieCreditsResolver, movieCreditsShortResolver } from './services/movie/movie-credits.service';
import { TvDetailsComponent } from './components/tv/tv-details/tv-details.component';
import { TvCreditsComponent } from './components/tv/tv-credits/tv-credits.component';
import { TvPageComponent } from './components/tv/tv-page/tv-page.component';
import { tvDetailsResolver, tvImagesResolver, tvLocationCountResolver } from './services/tv/tv-details.service';
import { tvCreditsResolver, tvCreditsShortResolver } from './services/tv/tv-credits.service';
import { SearchComponent } from './components/search/search.component';
import { PersonDetailsComponent } from './components/person/person-details/person-details.component';
import { personDetailsResolver } from './services/person/person-details.service';
import { personCreditsResolver } from './services/person/person-credits.service';
import { AuthComponent } from './components/auth/auth.component';
import { HomeLayoutComponent } from './components/layouts/home-layout.component';
import { AuthLayoutComponent } from './components/layouts/auth-layout.component';
import { UserActivityComponent } from './components/user/user-activity/user-activity.component';
import { UserReviewListComponent } from './components/user/user-review-list/user-review-list.component';
import { UserPageComponent } from './components/user/user-page/user-page.component';
import { MapAddComponent } from './components/map/map-add/map-add.component';
import { MapDetailsComponent } from './components/map/map-details/map-details.component';
import { MapMainComponent } from './components/map/map-main/map-main.component';
import { MapPageComponent } from './components/map/map-page/map-page.component';
import { mapDetailsResolver, mapPageResolver } from './services/map/map.service';
import { AuthGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  { path: '', component: HomeLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'user/:nickname', component:UserPageComponent, runGuardsAndResolvers: 'always' , children: [
        { path: '', redirectTo: 'activity', pathMatch: 'full'},
        { path: 'activity', component: UserActivityComponent},
        { path: 'reviewlist/:filter', component: UserReviewListComponent,}
      ]},
      { path: 'search', component: SearchComponent, runGuardsAndResolvers: 'always' },
      { path: 'movie', component: MoviePageComponent, runGuardsAndResolvers: 'always' },
      { path: 'movie/:id', component: MovieDetailsComponent, resolve: {
          details: movieDetailsResolver,
          images: movieImagesResolver,
          credits: movieCreditsShortResolver,
          locationCount: movieLocationCountResolver,
        },
        runGuardsAndResolvers: 'always',
      },
      { path: 'movie/:id/credits', component: MovieCreditsComponent, resolve: {
          details: movieDetailsResolver,
          credits: movieCreditsResolver
        }
      },
      { path: 'tv', component: TvPageComponent, runGuardsAndResolvers: 'always' },
      { path: 'tv/:id', component: TvDetailsComponent, resolve: {
          details: tvDetailsResolver,
          images: tvImagesResolver,
          credits: tvCreditsShortResolver,
          locationCount: tvLocationCountResolver,
        },
        runGuardsAndResolvers: 'always',
      },
      { path: 'tv/:id/credits', component: TvCreditsComponent, resolve: {
          details: tvDetailsResolver,
          credits: tvCreditsResolver
        }
      },
      { path: 'person/:id', component: PersonDetailsComponent, resolve: {
          details: personDetailsResolver,
          credits: personCreditsResolver,
        }
      },
      { path: 'map', component: MapMainComponent, children:  [
        { path: ':media_type/:media_id/add', component: MapAddComponent, canActivate: [AuthGuard]},
        { path: ':media_type/:media_id/details', component: MapDetailsComponent , resolve: {
            details: mapDetailsResolver
          }
        },
        {
          path: 'page', component: MapPageComponent, resolve: {
            data: mapPageResolver
          },
        },
        { path: '**', redirectTo: 'page' },
      ],
      runGuardsAndResolvers: 'always',},
    ]
  },
  { path: '', component: AuthLayoutComponent,
    children: [
      { path: 'auth', component: AuthComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload',scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {}