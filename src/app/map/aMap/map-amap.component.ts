import { Component, OnInit, ViewContainerRef } from '@angular/core';
declare var AMap: any;

@Component({
  selector: 'app-map-amap',
  templateUrl: './map-amap.component.html',
  styleUrls: ['./map-amap.component.scss']
})
export class MapAMapComponent implements OnInit {

  constructor() { }
  ngOnInit() {
    const map = new AMap.Map('container');
    map.plugin('AMap.Geolocation', () => {
      const geolocation = new AMap.Geolocation({
        enableHighAccuracy: true,//是否使用高精度定位，默认:true
        timeout: 10000,          //超过10秒后停止定位，默认：无穷大
        maximumAge: 0,           //定位结果缓存0毫秒，默认：0
        convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
        showButton: true,        //显示定位按钮，默认：true
        buttonPosition: 'RT',    //定位按钮停靠位置，默认：'LB'，左下角
        buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
        showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
        panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
        zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        resizeEnable: true
      });
      map.addControl(geolocation);
    });
    map.plugin('AMap.ToolBar', () => {
      const toobar = new AMap.ToolBar({
      });
      map.addControl(toobar);
    });
    map.plugin('AMap.Scale', () => {
      const scale = new AMap.Scale({
      });
      map.addControl(scale);
    });
    map.plugin('AMap.OverView', () => {
      const overView = new AMap.OverView({
        isOpen: true
      });
      map.addControl(overView);
    });

    /*map.addControl(new AMap.ToolBar());
    map.addControl(new AMap.Scale());
    map.addControl(new AMap.OverView({isOpen: true}));*/
  }


}
