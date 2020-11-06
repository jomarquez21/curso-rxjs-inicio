import { Observable, Observer } from 'rxjs'
// Cuando el objecto se extra desde 'rxjs' significa que es algo para crear observables

const observer$: Observer<any> = {
  next: value => console.log('Siguiente [next]: ', value),
  error: error => console.warn('Error [obs]: ', error),
  complete: () => console.info('Complete [obs]'),
}

/**
 * Observable: Es un un objeto que puede emitir valores.
 */
// const obs$ = Observable.create();
const obs$ = new Observable<string>((subs) => {
  // Subcriptciones: gente que va a estar penddiente de las emisiones de mi observacion.

  // next va a emitir el valor que yo quiero a las pernas que estan suscritas a el.
  subs.next('Hola');
  subs.next('Mundo');

  // Forzamos un error;
  // const a = undefined;
  // a.name = 'Jomarquez';

  // Ninguna emision posterior a la llamada del complete va a ser notificado a los suscriptores.
  subs.complete();
});

// obs$.subscribe(res => console.log(res)); esta linea es igual a la linea siguente;
obs$.subscribe(console.log);

// Los argumentos que recibe el subscribe.
obs$.subscribe(
  valor => console.log('next: ', valor),
  // Cuando entras en el argumento del error el observable por defecto termina.
  error => console.error('Error: ', error),
  () => console.info('Complete')
);

// otra forma de como recibe la informacion del subscribe
obs$.subscribe(observer$);
