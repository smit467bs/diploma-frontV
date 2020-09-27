import { Component } from '@angular/core';
import { Logger } from '../../core/services/logger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent {
  constructor(private logger: Logger) {
  }
}
