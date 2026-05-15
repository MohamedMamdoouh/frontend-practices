import { decreaseCounter, increaseCounter } from './../../store/counter/counter.action';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification-service';
import { filter, Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  subscription!: Subscription;
  counter: Observable<number>;
  count: number = 0;

  constructor(
    private notificationService: NotificationService,
    private store: Store<{ counter: number }>,
  ) {
    this.counter = this.store.select('counter');
    this.counter.subscribe((value) => {
      this.count = value;
    });
  }

  ngOnInit(): void {
    this.subscription = this.notificationService
      .getNotifications()
      .pipe(filter((notification) => notification !== ''))
      .subscribe({
        next: (notification) => {
          console.log(notification);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('no more notifications');
        },
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  increaseCounterValue() {
    this.store.dispatch(increaseCounter());
  }

  decreaseCounterValue() {
    this.store.dispatch(decreaseCounter());
  }
}
