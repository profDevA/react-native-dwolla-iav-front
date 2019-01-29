# RNSail - Folder Structure Guidelines

The folder arranged as:
    
    ├── src
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

## src/screens
 
* Grouping base on features with folder naming in lowercase. 
* More __explicitly__ naming the screen filename (reflect the content), eg.: auth/Signin.js.
* If a screen become more complicated, breakdown into folder name using __Capitalization__ (which represent a screen), eg: home/Home as shown below 

Esample of the screens folder arrangements:

    ├── src
    │   ├── ...
    │   └── screens                     
    │   │   ├── auth                    # grouping : authentication
    │   │   │   ├── Signin.js           # Signin screen
    │   │   │   ├── Signup.js           # Signup screen
    │   │   │   ├── SignupConfirm.js    # Signup Confirm screen
    │   │   │   └── Forgot.js           # Forgot Password screen
    │   │   ├── home                    # grouping : home tab
    │   │   │   ├── Home                # Home (capitalization), represent a single screen
    │   │   │   │   ├── _news.js        # Home component: News list 
    │   │   │   │   ├── _features.js    # Home component: Features list 
    │   │   │   │   ├── styles.js       # Home styles 
    │   │   │   │   └── index.js        # main script of Home
    │   │   │   ├── News.js             # News screen
    │   │   │   ├── Features.js         # Features screen
    │   │   │   ├── ...
    │   │   │   
    │   │   └── ...                        
    │   ├── ...
    ├── ...
    │

## src/components

The components folder is for __reusable components__, sometimes called _**atomic components**_. 
According to React naming conventions, the first letter should be uppercase.

## src/lib

Library, the place for reusable also, but more spesific to function or _**non atomic components**_, eg: isIphoneX().

## Reference

- https://medium.freecodecamp.org/how-to-structure-your-project-and-manage-static-resources-in-react-native-6f4cfc947d92