import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  isSubscribed = signal(false);

  handleSubsribe() {
    setTimeout(() => {
      this.isSubscribed.set(true);
    }, 3000);
  }
}
