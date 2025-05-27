import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaqComponent } from './faq/faq.component';

@Component({
  selector: 'app-root',
  imports: [FaqComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-animations';
}
