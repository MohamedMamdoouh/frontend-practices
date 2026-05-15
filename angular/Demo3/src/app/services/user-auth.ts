import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuth {
  private authSubjectBehavior = new BehaviorSubject<boolean>(this.isUserLoggedIn());
  constructor() {}

  login(): void {
    localStorage.setItem('token', 'sometoken54415');
    this.authSubjectBehavior.next(true);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.authSubjectBehavior.next(false);
  }

  isUserLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  getAuthSubject(): BehaviorSubject<boolean> {
    return this.authSubjectBehavior;
  }

  getUserToken(): string | null {
    return localStorage.getItem('token');
  }
}
