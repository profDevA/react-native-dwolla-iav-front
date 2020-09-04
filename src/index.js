import React, {useState, useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

import MainTab from './MainTab';
import SplashScreen from './Splash';
import SignInScreen from './Signin';
import AuthContext from 'helpers/AuthContext';

const App = (props) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useMemo(() => {
    async function checkUser() {
      let userData;
      try {
        userData = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }
      setUser(userData);
      setLoading(false);
    }
    checkUser();
  }, []);

  const signIn = (data) => {
    setUser(data);
  };

  const signOut = () => {
    setUser(null);
  };

  const Stack = createStackNavigator();

  const mainNav = () => (
    <Stack.Navigator headerMode="none">
      {loading ? (
        <Stack.Screen name="Welcome" component={SplashScreen} />
      ) : (
        <>
          <Stack.Screen name="Home" component={MainTab} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
        </>
      )}
    </Stack.Navigator>
  );
  return (
    <AuthContext.Provider value={{user, signIn, signOut}}>
      <NavigationContainer>{mainNav()}</NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
