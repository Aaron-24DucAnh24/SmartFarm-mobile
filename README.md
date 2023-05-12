# SMART FARM MOBILE APPLICATION
## Requirements
1. Setup **React native CLI** development environment.
2. Make sure you got: 
- JDK 11 for Android 
- Ruby 3.2.0 or 2.7.6(recommended, use ***rbenv*** tool) for ios
- Cocoapods installed in ***usr/local/*** for ios
## Setup
1. Install dependencies.

For ios, open the ios project in XCode. Drop file node_modules/react-native-vector-icons to the XCode project. 

> After that, run these command:
``` bash
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

3. Setup adafruit configurations.
    * Go to directory **src/controller/adafruit/**
    * Create **config.js**
> Append these lines into the file, replace "___" with appropriate credential for adaFruit authentication.

``` javascript

const username = '____'
const password = '____'

const config = {
    url: `mqtts://${username}:${password}@io.adafruit.com`,
    options: {
        username: username,
        password: password,
        port: 8883,
        host: 'io.adafruit.com',
        protocolId: 'MQTT',
    }
}
export default config

```

## Run
``` bash
npm cache clean --force
npm start
```
Open a new terminal, run:
``` bash
npm run ios
npm run android
```