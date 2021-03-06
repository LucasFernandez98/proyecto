import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { LocationComponent } from './location/location.component';


@NgModule({
  declarations: [LocationComponent],
  imports: [
    CommonModule,
    LocationsRoutingModule,
  ]
})
export class LocationsModule { }
