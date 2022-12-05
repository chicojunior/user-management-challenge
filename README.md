# User Management | Tonic App Challenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0 and it's a challenge for a job position.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. The command `npm run build:prod` creates a build optimized to be used on the production environment/server.

## Token Expiration

About the token expiration functionality, the default time for expiration is set to 7 minutes. This time can be changed on the constant TOKEN_TIMEOUT, set on core/constants.ts file.

## Registering new users

For some reason, I was only able to register users on reqres.in using known emails from their list on the resource /users [GET /users](https://reqres.in/api-docs/#/default/get_users). To test the register new user please, use some of the known emails listed here:

- george.bluth@reqres.in
- janet.weaver@reqres.in
- emma.wong@reqres.in
- eve.holt@reqres.in
- charles.morris@reqres.in
- tracey.ramos@reqres.in

_Obs: the password can be anyone you want._

### _Issue on creating new user_

_The reqres.in [API](https://reqres.in/api-docs/#/) have a resource to create new users, but it doesn't appear on the users list whe it is fetched. The route and function are implemented as requested but are not able to persist on the server._
