# FirstNetWebPrintOnline.UI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.6.

This project is the front-end portion of my FirstNet WebPrintOnline web app written in AngularJS. It isn't fancy but it gets the job done. 

It does include implementation of basic authentication and authorization which is managed by Auth0.com. 

The web app, upon the user entering a six digit order number and clicking submit will call the REST API POST method. Then will call REST API GET method 
and update the table where the data is stored in an SQL database. The database stores the last 5 requests.

The bulk of the actual work is done on a server-side C# .NET Framework console application. The workflow process (label printing) that was done manually is automated through the server-side application. The fron-end, back-end REST API and database simply serve as a means of communicating the desired order to automate. This allows
multiple people to submit print requests.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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
