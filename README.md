# NewsBoard App

A simple Newsboard app build with Angular, Angular CLI and AngularFire2.
The app features Firebase backend with email/password authorization. <br>
One user is already added to Firebase (email: 'email@test.com', password: '12345678'). Also there is an opportunity of adding new users. <br>
News on a News tab are generated using News API. <br>
Profile tab is block by Angular Guard, if user is not logged in.

Versions: <br>
Angular CLI: 12.2.10 <br>
Node: 14.17.5 <br>
Package Manager: npm 7.22.0


## Local start

`$ cp src/environments/environment.example.ts src/environments/environment.ts`
`$ npm install`<br>
`$ npm start`
