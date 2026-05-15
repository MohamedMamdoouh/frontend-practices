import { Component } from '@angular/core';
import { IStore } from '../../models/istore';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  myStore: IStore = {
    name: 'My Store',
    igmUrl: 'https://picsum.photos/id/237/200/300',
    branches: ['Branch 1', 'Branch 2', 'Branch 3'],
  };
}
