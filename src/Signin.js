import React, {useState, useContext} from 'react';
import {View, TextInput, Button} from 'react-native';
import AuthContext from 'helpers/AuthContext';

const Signin = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {signIn} = useContext(AuthContext);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign in" onPress={() => signIn({username, password})} />
    </View>
  );
};

export default Signin;
