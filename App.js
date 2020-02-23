import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screen/Login';

export default function App() {
  return (
    <View style={styles.view}>
      <Login />
    </View>
  );
}

// const AppStackNavigator = StackNavigator({
//   loginScreen: Login
// })

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
