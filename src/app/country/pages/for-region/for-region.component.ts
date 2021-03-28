import { Component } from '@angular/core';

@Component({
  selector: 'app-for-region',
  templateUrl: './for-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class ForRegionComponent {
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activatedRegion: string = '';

  constructor() {}

  getClass(region: string): string {
    return region === this.activatedRegion
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activeRegion(region: string) {
    this.activatedRegion = region;

    // TODO service call
  }
}
