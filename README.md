# RNSail - React Native Starter

My starter kit for react native projects.  

This starter is using:
* [React Native](https://facebook.github.io/react-native/) 0.57.3
* [React Native Material UI](https://github.com/xotahal/react-native-material-ui) 1.30.1
* [React Navigation](https://github.com/react-navigation/react-navigation) 2.18.0
* React-redux 
* [Screen Tracking Google Analytic](https://github.com/idehub/react-native-google-analytics-bridge)

## Folder Structure

The folder following known best practices, arranged as:
    
    ├── App
    │   ├── assets                  # assets (such as linked font)
    │   ├── components              # custom components used
    │   ├── config                  # configuration
    │   ├── redux
    │   │   ├── actions             # redux actions
    │   │   └── reducers            # reducers (redux)
    │   ├── routes                  # routing navigation
    │   ├── screens                 # screen of each page 
    │   ├── themes                  # theme styling
    │   └── index.js
    ├── ...
    │


## Installation

### Create your local copy

To create new project using this, you need to copy/clone this to your local.

### Rename your Project

Then use [react-native-rename](https://github.com/junedomingo/react-native-rename) to rename the project from it's default RNStarter

    $ react-native-rename MyApp -b com.domain.myapp


### Install using yarn

After rename, you have to install first. This project created using yarn.

    $ yarn

### pod install for IOS

For IOS development, it's also need to install the pods (cocoapods), before it's can be run.

    $ cd ios
    $ pod install
    $ cd ..

### run 

Now 

    $ react-native run-ios 
or

    $ react-native run-android
    
## Troubleshoot

### On IOS 

You might need to compile glog on first install or after update component

    $ cd node_modules/react-native/scripts ; ./ios-install-third-party.sh ; cd ../../../ 
    $ cd node_modules/react-native/third-party/glog-0.3.5/ ; ./configure ; cd ../../../../

Reference is here https://github.com/facebook/react-native/issues/20774

## Buy me a Coffee

If you feel this is useful, please consider to buy me a cup of coffee or two.

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=D2T4LVXPTDHLG)

## Reference

This starter created is intended for self-use purposed. Btw, you might be interested on my learning process to create this starter.

Please find it in this articles. 

 - https://medium.com/@kevinle/comprehensive-routing-and-navigation-in-react-native-made-easy-6383e6cdc293
 - https://medium.com/@jonlebensold/getting-started-with-react-native-redux-2b01408c0053
 - https://reactnavigation.org/docs/getting-started.html
 - Some stackoverflow on Android/IOS settings.
 
Cheers!
 
[Sunaryo Hadi](https://www.sunaryohadi.info)
