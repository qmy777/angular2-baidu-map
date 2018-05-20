import { ModuleWithProviders, NgModule } from '@angular/core'

import { ControlComponent } from './components/control.component'
import { MapComponent } from './components/map.component'
import { MarkerComponent } from './components/marker.component'
import { PolylineComponent } from './components/polyline.component'
import { CircleComponent } from './components/circle.component'
import { PolygonComponent } from './components/polygon.component'
import { HeatmapComponent } from './components/heatmap.component'
import { TileLayderComponent } from './components/tilelayer.component'
import { TrafficLayderComponent } from './components/trafficlayer.component'
import { MarkerClustererComponent } from './components/markerClusterer.component'
import { LOADING_STATE, ScriptLoader, ScriptLoaderConfig } from './providers/scriptLoader'

import { BMap } from './types/BMap'
import { BMapLib } from './types/BMapLib'

@NgModule({
  declarations: [
    MapComponent,
    MarkerComponent,
    ControlComponent,
    PolylineComponent,
    CircleComponent,
    PolygonComponent,
    HeatmapComponent,
    TileLayderComponent,
    TrafficLayderComponent,
    MarkerClustererComponent
  ],
  exports: [
    MapComponent,
    MarkerComponent,
    ControlComponent,
    PolylineComponent,
    CircleComponent,
    PolygonComponent,
    HeatmapComponent,
    TileLayderComponent,
    TrafficLayderComponent,
    MarkerClustererComponent
  ]
})
export class BaiduMapModule {
  public static forRoot(_config?: ScriptLoaderConfig): ModuleWithProviders {
    return {
      ngModule: BaiduMapModule,
      providers: [{ provide: ScriptLoaderConfig, useValue: _config }, ScriptLoader]
    }
  }
}

export { BMapInstance, MapOptions, BMapType, BProjection, MapTypeEnum } from './types/Map'
export { Point } from './types/Point'
export { BMarker, Marker, MarkerOptions } from './types/Marker'
export { BPolyline, PolylineOptions } from './types/Polyline'
export { BCircle, CircleOptions } from './types/Circle'
export { BPolygon, PolygonOptions } from './types/Polygon'
export { BHeatmap, HeatmapOptions, HeatmapData } from './types/Heatmap'
export { BTileLayer, TileLayerOptions, getTilesUrlFunc } from './types/TileLayer'
export { BTrafficLayer, TrafficLayerOptions, PredictDate } from './types/TrafficLayer'
export { BMarkerClusterer, MarkerClustererOptions } from './types/MarkerClusterer'
export { TextIconStyle } from './types/TextIconOverlay'
export {
  BControl,
  BNavigationControl,
  BOverviewMapControl,
  BScaleControl,
  BMapTypeControl,
  BGeolocationControl,
  BPanoramaControlControl,
  ControlType,
  ControlAnchor,
  GeolocationControlOptions,
  LengthUnit,
  NavigationControlOptions,
  NavigationControlType,
  OverviewMapControlOptions,
  ScaleControlOptions,
  MapTypeControlOptions,
  MapTypeControlType
} from './types/Control'
export { BInfoWindowConstructor, BInfoWindowOptions } from './types/InfoWindow'

declare global {
  interface Window {
    _scriptLoadState: { [url: string]: LOADING_STATE }
    _loadingCallbacks: { [url: string]: Array<() => void> }
    BMap: BMap
    BMapLib: BMapLib
    baidumapinit: () => void
    BMAP_PERSPECTIVE_MAP: any
  }
}
