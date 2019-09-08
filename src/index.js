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
import { NavigationOptions } from './Components/ReUsableComponents/HomeScreenHeader/HomeScreenHeader'
import SideMenu from './Components/SideMenu'
import JoinedCommunity from './Screens/JoinedCommunity'
import CreatedCommunity from './Screens/CreatedCommunity'
import Scholarship from './Screens/ScholarshipScreens/Scholarship'
import { HomeScreenBottomTabs } from './Navigations/TabNavigations/HomeScreenNavigation'
import Profile from './Screens/Profile/Profile'
import Apply from './Screens/ScholarshipScreens/Apply'
import Mywallet from './Screens/Mywallet'
import SendCoins from './Screens/SendCoins'
import Scanner from './Screens/Scanner'
import MyTimeline from './Screens/Profile/MyTimeline'
import Language from './Screens/Profile/Language'
import Topics from './Screens/Profile/Topics'
import Notifications from './Screens/Notifications'

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
      screen: JoinedCommunity,
      navigationOptions: (options) => NavigationOptions(options, "Joined Communities", "sideMenu")
    },
    CreatedCommunity: {
      screen: CreatedCommunity,
      navigationOptions: (options) => NavigationOptions(options, "Created Communities", "sideMenu")
    },
    Aboutus: {
         screen: Aboutus,
         navigationOptions: (options) => NavigationOptions(options, "About Us", "sideMenu")
    },
    Apply: {
         screen: Apply
       },
       Mywallet: {
         screen: Mywallet
       },
       Profile: {
         screen: Profile
       },
       SendCoins: {
        screen: SendCoins
      },
    // LogOutScreen: {
    //   screen: Logout
    // },
       Scanner:{
         screen: Scanner
       },
       Timeline:{
         screen: MyTimeline
       },
       Language:{
         screen: Language
       },
       Topics:{
         screen: Topics
       },
   Notifications:{
     screen: Notifications
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

