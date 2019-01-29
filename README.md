# RNSail - React Native Starter

My starter kit for react native projects.  

* [React Native](https://facebook.github.io/react-native/) 0.57.8
* [React Native Material UI](https://github.com/xotahal/react-native-material-ui) 1.30.1
* [React Navigation](https://github.com/react-navigation/react-navigation) 3.0.9
* React-redux 6.0.0
* ~~[Screen Tracking Google Analytic](https://github.com/idehub/react-native-google-analytics-bridge)~~


## Folder Structure

The folder arranged as:
    
    ├── App
    │   ├── assets                  # assets (such as fonts, image, sound & etc)
    │   ├── components              # widely used Custom Components, import using '@components'
    │   ├── lib                     # custom functions/library, import using '@lib'
    │   ├── config                  # configuration, import using '@config'
    │   ├── redux
    │   │   ├── actions             # redux actions
    │   │   └── reducers            # reducers
    │   ├── routes                  # routing navigation
    │   ├── screens                 # All screen pages are here
    │   │   └── ...                 # screens   
    │   ├── themes                  # theme styling
    │   └── index.js
    ├── ...
    │


## More on ...

* [Folder Structure Guidelines](docs/Folder.md)
* [Coding Guidelines](docs/Coding.md)  (coming soon)
* [Styling Guidelines](docs/Styling.md)  (coming soon)

## Installation

### Create your local copy

To create new project using this, you need to copy/clone this to your local.

    $ git clone https://github.com/sunaryohadi/RNSail.git MyApp

### Rename your Project

Then use [react-native-rename](https://github.com/junedomingo/react-native-rename) to rename the project from it's default RNStarter

    $ react-native-rename MyApp -b com.domain.myapp


### Install using yarn

    $ yarn install
    $ react-native link

### Cocoapods for IOS (optional)

For IOS development, if your prefer using Cocoapods, rename ios/Podfile.txt into ios/Podfile, and run.

    $ cd ios
    $ pod install
    $ cd ..

### Run 

    $ react-native run-ios 
or

    $ react-native run-android
    
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
