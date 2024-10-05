# Morty Labs

This project is an Angular template used to experiment with the latest features of the framework and as part of my portfolio.

## Common Commands

```bash
ng g service services/character
```

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

### 4.1 Update angular.json to use OnPush change detection and other defaults
```json
"schematics": {
    "@schematics/angular:component": {
        "style": "scss",
        "changeDetection": "OnPush",
        "skipTests": true
    },
    "@schematics/angular:service": {
        "skipTests": true
    },
    "@schematics/angular:directive": {
        "skipTests": true
    },
    "@schematics/angular:guard": {
        "skipTests": true
    },
    "@schematics/angular:pipe": {
        "skipTests": true
    },
    "@schematics/angular:class": {
        "skipTests": true
    },
    "@schematics/angular:module": {
        "skipTests": true
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

### 5 Update tsconfig.json to use baseUrl and paths
```json
"baseUrl": "./",
"paths": {
    "@app/*": ["src/app/*"],
}
```

## Architecture and Design Patterns

### 1. Screaming Architecture

Screaming Architecture is a design pattern where the structure of the project should shout what the system does. This means organizing the code around the core business capabilities or domain rather than technical concerns.

**Characteristics:**
- The folder names and structure reflect the business use cases.
- Makes the core intent of the application obvious from the structure.

### 2. Container/Presenter Pattern

This pattern separates the responsibilities between UI logic and rendering logic:
- **Container:** Manages state, retrieves data, and passes it to presentational components.
- **Presenter (Presentational Component):** Focuses on displaying the data and handling UI-related concerns.

**Characteristics:**
- Encourages separation of concerns.
- Makes UI components more reusable and easier to test.

### 3. Barrels

Barrels (`index.ts`) are used in each folder to simplify imports. This helps to:
- Group exports in a single place.
- Clean up import paths throughout the application.

Each folder inside `src/app/` contains an `index.ts` file, allowing us to manage exports easily.

## Folder Structure

The following folder structure is organized according to these patterns:

```
\src\app\
    adapters/
        index.ts
    components/
        index.ts
    services/
        index.ts
    models/
        index.ts
    store/
        index.ts
```

### Create Folders and Barrels Automatically

To create the required folders and `index.ts` files, run the following command:

```
node -e "const fs = require('fs'); const path = require('path'); const root = 'src/app'; const folders = ['adapters', 'components', 'services', 'models', 'store']; folders.forEach(folder => { const fullPath = path.join(root, folder); fs.mkdir(fullPath, { recursive: true }, (err) => { if (err) throw err; fs.writeFile(path.join(fullPath, 'index.ts'), '', (err) => { if (err) throw err; console.log('Creado: ' + path.join(fullPath, 'index.ts')); }); }); });"

```

## HTTP Client Configuration with Fetch

In this project, we configure the Angular HTTP Client to use the modern Fetch API for handling HTTP requests instead of the older `XMLHttpRequest`.

### Why Use Fetch?

The Fetch API offers several advantages over `XMLHttpRequest`:
- **Simplified API**: Fetch is easier to use and promises-based, which integrates better with `async/await`.
- **Streaming Support**: Fetch allows for streaming responses, making it ideal for handling large responses without loading everything into memory at once.
- **Improved Error Handling**: Errors are more consistently handled in Fetch, improving reliability in error scenarios.
- **Performance**: Fetch can offer better performance and lower resource consumption in some cases.

### Configuration

To enable Fetch in your Angular project, update the `app.config.ts` file with the following configuration:

```typescript
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
// ... Other imports

export const appConfig: ApplicationConfig = {
  providers: [
     // ... Other providers
    provideHttpClient(withFetch())  // Enable Fetch for HTTP requests
  ],
};
```