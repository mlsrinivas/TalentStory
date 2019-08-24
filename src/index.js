import React from "react";
import {
  View,
  Image,
  ActivityIndicator,
  StatusBar,
  Dimensions
} from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator
} from "react-navigation";
import Login from './Screens/LoginScreens/Login'
import SignUp from './Screens/SignUpScreens/SignUp'
import ForgetPassword from './Screens/ForgetPassword'
//import { NavigationOptions } from './Components/ReUsableComponents/Header/Header'
import SideMenu from './Components/SideMenu'
import { HomeScreenBottomTabs } from './Navigations/TabNavigations/HomeScreenNavigation'

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props); 
    this._bootstrapAsync()
  }

  _bootstrapAsync = () => {
      console.log("inside _bootstrapAsync")
    this.props.navigation.navigate("Auth")
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>

    );
  }
}

const AuthStack = createStackNavigator({
    Login: { 
        screen: Login,
        //navigationOptions: (options) => NavigationOptions(options, <Image src={require('../assets/abc..jpeg')}/>)
     },
    SignUp: { 
        screen: SignUp,
        //navigationOptions: (options) => NavigationOptions(options,  <Image src={require('../assets/Login.jpeg')}/>)
     },
     ForgetPassword: {
       screen: ForgetPassword,
     }
});

const DrawerAuthStack = createDrawerNavigator(
  {
    AuthStack: {
      screen: AuthStack
    },
    HomeScreenStack: { 
      screen: HomeScreenBottomTabs
    },
  },
  {
    contentComponent: props => <SideMenu {...props} />,
    drawerPosition: "left",
    drawerWidth: Dimensions.get("window").width - 70
  }
)

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
     Auth: DrawerAuthStack,
      // Auth: {
      //   screen: AuthStack,
      // }
    },
    {
      initialRouteName: "AuthLoading"
    } 
  )
)
