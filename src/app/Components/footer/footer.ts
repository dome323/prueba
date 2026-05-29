import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer footer-center p-4 bg-base-200 text-base-content">
      <div>
        <p>Domenica — <a class="link" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></p>
      </div>
    </footer>
  `
})
export class FooterComponent {}