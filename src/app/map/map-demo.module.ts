import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BaiduMapModule } from 'angular2-baidu-map';
import { mapRoutes } from './map-demo.routes';
import { MapDemoComponent } from './map-demo.component';
import { MapBaiduComponent } from './baiduMap/map-baidu.component';
import { MapAMapComponent } from './aMap/map-amap.component';
import { MapBaidu2Component } from './baiduMap2/map-baidu.component';
import {MapGoogleComponent} from './googleMap/map-google.component';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      BaiduMapModule,
      RouterModule.forChild(mapRoutes)
    ],
    exports: [],
    declarations: [
      MapDemoComponent,
      MapBaiduComponent,
      MapBaidu2Component,
      MapGoogleComponent,
      MapAMapComponent
    ],
    providers: [
     ],
})
export class MapDemoModule { }
