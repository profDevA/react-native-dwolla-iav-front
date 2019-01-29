# RNSail - Folder Structure Guidelines

The folder arranged as:
    
    ├── App
    │   ├── assets                  # assets (such as fonts, image, sound & etc)
    │   ├── components              # widely used Custom Components, import using '@components'
    │   ├── lib                     # custom functions/library, import using '@lib'
    │   ├── config                  # configuration, import using '@config'
    │   ├── redux
    │   │   ├── actions             # redux actions
    │   │   ├── reducers            # reducers
    │   │   └── stores              # stores, if necessary
    │   ├── routes                  # routing navigation
    │   ├── screens                 # All screen pages are here
    │   │   └── ...                 # screens   
    │   ├── themes                  # theme styling
    │   └── index.js
    ├── ...
    │

## Under the /src/screens

Under the screens folder, grouping base on features with folder naming in lowercase. 
Preferred to naming a screen file not using index.js, but more **explicitly** showing the content, eg.: home/Home.js, auth/Signin.js

Eg. of the screens:

    ├── App
    │   ├── ...
    │   └── screens                     # All screen pages are here
    │   │   ├── auth                    # grouping : authentication
    │   │   │   ├── Signin.js           # Signin screen
    │   │   │   ├── Signup.js           # Signup screen
    │   │   │   ├── SignupConfirm.js    # Signup Confirm screen
    │   │   │   └── Forgot.js           # Forgot Password screen
    │   │   ├── home                    # grouping : home tab
    │   │   │   ├── Home.js             # Home screen
    │   │   │   ├── Features.js         # Features screen
    │   │   │   ├── FeatureDetail.js    # Feature Detail screen
    │   │   │   └── ...
    │   │   └── ...                        
    │   ├── ...
    ├── ...
    │