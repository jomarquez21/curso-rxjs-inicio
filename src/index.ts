import { observable, Observable } from 'rxjs'
// Cuando el objecto se extra desde 'rxjs' significa que es algo para crear observables


/**
 * Observable: Es un un objeto que puede emitir valores.
 */
// const obs$ = Observable.create();
const obs$ = new Observable<string>((subs) => {
  // Subcriptciones: gente que va a estar penddiente de las emisiones de mi observacion.

  // next va a emitir el valor que yo quiero a las pernas que estan suscritas a el.
  subs.next('Hola');
  subs.next('Mundo');

  // Ninguna emision posterior a la llamada del complete va a ser notificado a los suscriptores.
  subs.complete();
});

// obs$.subscribe(res => console.log(res)); esta linea es igual a la linea siguente;
obs$.subscribe(console.log);




