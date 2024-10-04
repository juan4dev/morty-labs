# Morty Labs

This project is an Angular template used to experiment with the latest features of the framework and as part of my portfolio.

## Setup and Configuration

### 1. Install Angular CLI
```bash
npm install -g @angular/cli
```
### 2. ng new morty-labs --directory .

```bash
ng new morty-labs --directory .
```

### 3. Install signals
```bash
npm install @ngrx/signals
```

### 4.1 Update angular.json to use OnPush change detection
```json
"schematics": {
    "@schematics/angular:component": {
        "style": "scss",
        "changeDetection": "OnPush"
    }
},
```

### 4.2.1 update angular.json remove zone.js from polyfills
```json
"polyfills": []
```
### 4.2.2 Update app.config.ts to remove provideZoneChangeDetection and add provideExperimentalZonelessChangeDetection
```typescript
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideExperimentalZonelessChangeDetection()]
};
```

### 4.3 uninstall zone.js
```bash
npm uninstall zone.js
```