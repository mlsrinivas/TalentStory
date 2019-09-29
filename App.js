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

const ReactNavigation = require('react-navigation');
ReactNavigation.SafeAreaView.setStatusBarHeight(0);
import { createStyles, minWidth, minHeight } from 'react-native-media-queries';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
    	<View style={styles.container}>
          <MyStatusBar backgroundColor="#0073C0" barStyle="light-content" />
          <AuthLoadingScreen />
      	</View>
        
    );
  }
}

const MyStatusBar = ({backgroundColor, ...props}) => (
  Platform.OS === 'ios' ? 
	  <View style={[style.statusBar, { backgroundColor }]}>
	    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
	  </View> : null
);

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
}); 

const base = {
  statusBar: {
    height: STATUSBAR_HEIGHT
  },
}
 
const style = createStyles(
  base,
  minHeight(812, minWidth(375, {statusBar:{height: 40}})),
);



