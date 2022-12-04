# User Management | Tonic App Challenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0 and it's a challenge for a job position.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. The command `npm run build:prod` creates a build optimzed to be used on the production environment/server.

## Registering/Creating new users

For some reason I was only able to register users on reqres.in using known emails from their list on the resource /users [GET /users](https://reqres.in/api-docs/#/default/get_users). To test the register new user please, use some of the knwon emails listed here:

- george.bluth@reqres.in
- janet.weaver@reqres.in
- emma.wong@reqres.in
- eve.holt@reqres.in
- charles.morris@reqres.in
- tracey.ramos@reqres.in

_Obs: the password can be anyone you want._

### _Issue on create new user_

_The [API](https://reqres.in/api-docs/#/) doesn't have a resource to create new users. The route and function is implemented as requested but is not able to persist on the server._
