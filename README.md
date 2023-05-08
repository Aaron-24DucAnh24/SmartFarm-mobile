# SMART FARM IOT SYSTEM
## Requirements
1. Setup **React native CLI** development environment.
2. Make sure you got: 
- JDK 11 for Android 
- Ruby 3.2.0 or 2.7.6(recommended, use ***rbenv*** tool) for ios
- Cocoapods installed in ***usr/local/*** for ios
## Setup
1. Install dependencies.
``` shell
npm install
cd ios
pod install
cd..
```

2. Setup firebase configurations.
    * Go to directory **src/controller/firebase/**
    * Create **config.js**
> Append these lines into the file, replace "___" with appropriate credential for firebase authentication.

``` javascript
const firebaseConfig = {
    apiKey: "___",
    authDomain: "___",
    databaseURL: "___",
    projectId: "___",
    storageBucket: "___",
    messagingSenderId: "___",
    appId: "___",
    measurementId: "___"
}

export default firebaseConfig

```

3. Setup button configurations.
    * Go to directory **src/controller/button/**
    * Create **config.js**
> Append these lines into the file, replace "___" with appropriate credential for adaFruit authentication.

``` javascript
const password =  '____'
export default password

```

## Run
``` bash
npm start
```
Open a new terminal, run:
``` bash
npm run ios
npm run android
```