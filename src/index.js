import React from "react";
import {
  View,
  Image,
  ActivityIndicator,
  StatusBar,
  Dimensions,
  ScrollView,
  SafeAreaView
} from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
  DrawerItems
} from "react-navigation";
import Login from './Screens/LoginScreens/Login'
import SignUp from './Screens/SignUpScreens/SignUp'
import ForgetPassword from './Screens/ForgetPassword'
import Aboutus from './Screens/Aboutus'
//import { NavigationOptions } from './Components/ReUsableComponents/Header/Header'
import SideMenu from './Components/SideMenu'
import JoinedCommunity from './Screens/JoinedCommunity'
import CreatedCommunity from './Screens/CreatedCommunity'
import Scholarship from './Screens/Scholarship'
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
     },
    // FeedBackScreen: {
    //   screen: FeedBack
    // },
    Scholarship: {
      screen: Scholarship
    },
    // MyWalletScreen: {
    //   screen: MyWallet
    // },
    JoinedCommunity: {
      screen: JoinedCommunity
    },
    CreatedCommunity: {
      screen: CreatedCommunity
    },
    // RateTheAppScreen: {
    //   screen: CreatedCommunity
    // },
    // ShareWithFriendsScreen: {
    //   screen: ShareWithFriend
    // },
       Aboutus: {
         screen: Aboutus
       },
    // LogOutScreen: {
    //   screen: Logout
    // },
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

