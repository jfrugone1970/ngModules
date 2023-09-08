import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { EMPTY, Observable, mergeMap, of } from 'rxjs';
import { PreloadingOptions, PreloadingService } from '../services/preloading.service';

@Injectable({
  providedIn: 'root'
})
export class OnDemandRealoadingStrategy implements PreloadingStrategy {

  private _preloadDemandOptions$: Observable<PreloadingOptions>;

  constructor(private _proloadingService: PreloadingService) {
    this._preloadDemandOptions$ = this._proloadingService.options$;

  }

  private decidirsiCargar(route: Route, preloadingOptions: PreloadingOptions): boolean {

    return (
      route.data &&
      route.data['preload'] &&
      [route.path, '*'].includes(preloadingOptions.routePath) &&
      preloadingOptions.preload
    )
  }


  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return this._preloadDemandOptions$.pipe(
      mergeMap((preloadingOptions: PreloadingOptions) => {

        const precargar: boolean = this.decidirsiCargar(route, preloadingOptions);

        console.log(`${precargar ? '': "NO"}`)

        //devolvemos la ejecucion del call bak o nada
        return precargar ? load(): EMPTY

      })


    )



  }
}
