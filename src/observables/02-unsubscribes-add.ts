import { Observable, Observer } from 'rxjs'

const observer$: Observer<any> = {
  next: value => console.log('next: ', value),
  error: error => console.warn('error: ', error),
  complete: () => console.info('complete [obs]'),
}

const interval$ = new Observable<number>(subs => {
  // Create a counter
  let number = 0;

  const interval = setInterval(() => {
    number += 1;
    subs.next(number)
  }, 1000);

  setTimeout(() => {
    // Al `complete()` ser ejecutado inmediatamente se ejecuta la function de retorno del observable.
    subs.complete();
  }, 3000);

  // action ejecutada cuando `unsubscribe()` es llamado.
  return () => {
    console.log('unsubscribe');
    clearInterval(interval);
  }
});

const subscription = interval$.subscribe(observer$);
const subscription_2 = interval$.subscribe(observer$);
const subscription_3 = interval$.subscribe(observer$);

subscription
  .add(subscription_2)
  .add(subscription_3);

setTimeout(() => {
  //
  subscription.unsubscribe();
  console.log('complete all');
}, 5000)