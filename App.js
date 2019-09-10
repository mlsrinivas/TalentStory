import React from 'react';
import AuthLoadingScreen from './src';
import {
  View,
  Image,
  ActivityIndicator,
  StatusBar,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Platform,
  StyleSheet
} from "react-native";

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
    	<View style={{flex:1}}>
          <MyStatusBar backgroundColor="#0073C0" barStyle="light-content" />
          <AuthLoadingScreen />
      	</View>
        
    );
  }
}

const MyStatusBar = ({backgroundColor, ...props}) => (
  Platform.OS === 'ios' ? 
	  <View style={[styles.statusBar, { backgroundColor }]}>
	    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
	  </View> : null
);

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});



