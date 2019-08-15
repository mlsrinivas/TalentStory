import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/Screens/SignUpScreens/LoginScreen';
import SignUp from './src/Screens/SignUpScreens/SignUp';

export default function App() {
  return (
    <View style={styles.container}>
      <SignUp/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
