# SchemeMaster

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Micro-Frontend Steps using Angular Elements

# Child Application

1 - In app.module.ts  - Create manual bootstraping
        Code: 
            ngDoBootstrap(appRef: ApplicationRef): void {
               const element = createCustomElement(AppComponent , {injector : this.injector})
               customElements.define('app-scheme-master',element);
            }
2 - Create new file concat.js on root level of files - for create single file for build to provide other application and they can use s script and load.

3 - In package.json - create new script
        Code: 
            "bundle": "ng build --output-hashing none && node concat.js"

4 - After build - open new terminal as dist file run application on http server port for hosting
        Code: 
            PS C:\Users\Shree\Downloads\Harshal\Scheme_Master_System\schemeMaster\dist\scheme-master> http-server -p 9025

# Parent Shell Application

1 - index.html - access that child application using script
        Code :     
            <script type="text/javascript" src="http://localhost:9025/schemeMaster_micro-fe.js"></script>

2 - Create web component - scheme wrapper to access the html part through selector
        Code :
            <app-scheme-master [tenantList]="dialogData"></app-scheme-master>
            
3 - Using @Input and @Ouput property through we can pass the data and communicate to both project and components
