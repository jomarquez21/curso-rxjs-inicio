import { Observable, Observer } from 'rxjs'

const observer$: Observer<any> = {
  next: value => console.log('Siguiente [next]: ', value),
  error: error => console.warn('Error [obs]: ', error),
  complete: () => console.info('Complete [obs]'),
}
