import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PreloadSelectedModulesList implements PreloadingStrategy {

  /**
   *
   * @param route la ruta recibida que deberia cargar un modulo
   * @param load el callback que carga el modulo
   * @returns ejecuta un callback o devuelve un modulo
   */
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return route.data && route.data['preload'] ? load() : of(null);
  }
}
