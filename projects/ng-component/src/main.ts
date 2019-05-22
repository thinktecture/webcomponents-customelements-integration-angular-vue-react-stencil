import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import {LibModule} from './lib/lib.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(LibModule, { ngZone: 'noop' })
  .catch(err => console.error(err));
