import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {SegmentModule} from "ngx-segment-analytics";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(
      SegmentModule.forRoot({
        apiKey: 'dfiX',
        debug: false,
        loadOnInitialization: true,
      }),
    ),
  ]
};
