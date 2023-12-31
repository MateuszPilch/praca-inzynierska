import { Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { imageToUrl } from 'shared/image-to-url';
import { MapData } from 'shared/models/map/map-data';
import { MapDetails } from 'shared/models/map/map-details';
import { MapService } from 'src/app/services/map/map.service';

@Component({
  selector: 'app-map-details',
  templateUrl: './map-details.component.html',
  styleUrls: ['./map-details.component.css']
})
export class MapDetailsComponent {

  mediaPath!: string;
  mapDetails!: MapDetails

  constructor(private route: ActivatedRoute, private mapService: MapService) {}

  ngOnInit() {
    this.route.data.subscribe(({details}) => {
      this.mediaPath = `/${this.route.snapshot.paramMap.get('media_type')}/${this.route.snapshot.paramMap.get('media_id')}`;
      this.mapDetails = details;
      this.mapDetails.mapData.forEach(async (location) => {
        location.image = await imageToUrl(location.image);
        this.mapService.drawCircleLocation(location.center, location.radius);
      }); 
    });
  }

  deleteMapLocation(location_id: string): void {
    this.mapService.deleteMapLocation(this.mediaPath, location_id);
    this.mapDetails.mapData.splice(this.mapDetails.mapData.findIndex((location) => location._id === location_id), 1);
  }

  focusOnLocation(location: MapData): void {
    this.mapService.focusOnLocation(location.center, location.radius);
  }
}
