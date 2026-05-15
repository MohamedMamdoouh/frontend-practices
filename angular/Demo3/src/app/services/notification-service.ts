import { Injectable } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notification: string[];

  constructor() {
    this.notification = [
      'you have unread messages',
      'you have 3 new notifications',
      'your password will expire in 3 days',
      'you have a new friend request',
      '',
      'someone shared a post with you',
    ];
  }

  getNotifications(): Observable<string> {
    // observer.next() => means that we have a new value to emit
    // observer.error() => means that we have an error to emit (stop)
    // observer.complete() => means that we have completed emitting values (stop)

    let index = 0;
    let observer = new Observable<string>((subscriber) => {
      let notificationInterval = setInterval(() => {
        if (index >= this.notification.length) {
          subscriber.complete();
          return;
        }

        if (this.notification[index] === '') {
          subscriber.error('empty notification');
          return;
        }

        subscriber.next(this.notification[index++]);
      }, 2000);

      return () => {
        clearInterval(notificationInterval);
      };
    });

    return observer;

    // return from(this.notification);

    // return interval(2000).pipe(
    //   map((index) => {
    //     if (index >= this.notification.length) {
    //       throw new Error('no more notifications');
    //     }

    //     if (this.notification[index] === '') {
    //       throw new Error('empty notification');
    //     }

    //     return this.notification[index];
    //   }),
    //  );
  }
}
