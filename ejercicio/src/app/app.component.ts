import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChristianComponent } from './component/christian/christian.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChristianComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejercicio';
}
