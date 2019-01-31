import { Component } from '@angular/core';
import {ItemService} from './service/item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'store';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
