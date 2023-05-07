# SMART FARM IOT SYSTEM
## Requirements
Setup **React native CLI** development environment
## Setup
1. Install dependencies.
``` shell
npm install
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