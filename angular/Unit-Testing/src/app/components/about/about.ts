import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  template: `
    <section data-testid="about-page">
      <h2 data-testid="about-title">About Page</h2>
      <p>Simple routing is working in the Unit-Testing project.</p>
    </section>
  `,
})
export class About {}