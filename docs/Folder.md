# RNSail - Folder Naming Guidelines

The folder arranged as:
    
    ├── App
    │   ├── assets                  # assets (such as fonts, image, sound & etc)
    │   ├── common                  # widely used Custom Component, import using '@common'
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