import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// Creamos una clase de opciones de precarga
export class PreloadingOptions {

  constructor(public routePath: string,public preload: boolean = true){}

}

/**
 * SERVICIOS PERSOLANIZADOS QUE SE VAN A PRECARGA 0 NO UN MODULO
 * DE LAS DIFERENTES RUTAS QUE QUEDAN EN EL MODULO DE ENRUTADO
 * Y ESTEN ESPECIFICADAS COMO CARGA PERESOZA
 * LA IDEA ES QUE ATRAVES DE UN EVENTO DEL USUARIO DEL DOM (CLICK, HOVER, LONG PRESS..)
 * SE INICIEN UNA PRECARGA DE MODULOS
 *
 */

@Injectable({
  providedIn: 'root'
})
export class PreloadingService {

  private _subject = new Subject<PreloadingOptions>();

  public options$ = this._subject.asObservable();


  constructor() { }

  /**
   *
   * @param routePath Ruta que se desea descargar
   */

  comenzarPrecarga(routePath: string){
    // Creamos opciones de precarga
    const opcionesPrecarga: PreloadingOptions = new PreloadingOptions(routePath, true);

    // Emitimos las opciones que desean ser precargadas
    // Esta informacion lo va a escuchar la estrategia de precarga

    this._subject.next(opcionesPrecarga);



  }
}
