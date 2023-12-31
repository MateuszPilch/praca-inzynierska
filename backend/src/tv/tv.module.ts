import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TvController } from './tv.controller';
import { TvDetailsService} from './tv-details/tv-details.service';
import { TvCreditsService } from './tv-credits/tv-credits.service';
import { TvPageService } from './tv-page/tv-page.service';

@Module({
  imports: [HttpModule],
  controllers: [TvController],
  providers: [TvDetailsService, TvCreditsService, TvPageService],
})
export class TvModule {}
