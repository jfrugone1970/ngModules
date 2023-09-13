import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';

// avoid typing issues for now
export declare var navigator: any;

@Injectable({ providedIn: 'root' })
export class NetworkAwarePreloadStrategy implements PreloadingStrategy {

  /**
   *
   * @param route la ruta recibida que deberia cargar un modulo
   * @param load el callback que carga el modulo
   * @returns ejecuta un callback o devuelve un modulo
   */
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return this.hasGoodConnection() ? load() : EMPTY;
  }

  hasGoodConnection(): boolean {
    const conn = navigator.connection;
    // En caso de que tengamos condicion
    if (conn) {
      // Si el usuario tiene habilitado la reserva de datos
      if (conn.saveData) {
        return false; // save data mode is enabled, so dont preload
      }
      const avoidTheseConnections = ['slow-2g', '2g' /* , '3g', '4g' */];
      const effectiveType = conn.effectiveType || '';
      if (avoidTheseConnections.includes(effectiveType)) {
        return false;
      }
    }
    return true;
  }
}
