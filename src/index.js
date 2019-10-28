import React from "react";
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
import PostScholarship from './Screens/ScholarshipScreens/PostScholarship'
import ScholarshipHistory from './Screens/ScholarshipScreens/ScholarshipHistory'
import Mywallet from './Screens/Mywallet'
import SendCoins from './Screens/SendCoins'
import Scanner from './Screens/Scanner'
import Funding from './Screens/FundingScreens/Funding'
import MyTimeline from './Screens/Profile/MyTimeline'
import Language from './Screens/Profile/Language'
import Topics from './Screens/Profile/Topics'
import Notifications from './Screens/Notifications'
import Edit from './Screens/Profile/Edit'
import EnterPreneurForm from './Screens/FundingScreens/EnterpreneurForm'
import InvestorForm from './Screens/FundingScreens/InvestorForm'
import SearchScreen from './Screens/SearchScreen'
import Post from './Screens/Post'
import Startups from './Screens/Startups'
import CompanyProfile from './Screens/CompanyProfile'

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
      <View style={{flex:1}}>
          {/*<MyStatusBar backgroundColor="#5E8D48" barStyle="light-content" />*/}
{/*        <ActivityIndicator />*/}
        {/*<StatusBar barStyle="light-content" hidden={false} translucent={true} backgroundColor='#0073C0'/>*/}
      </View>

    );
  }
}



const AppStack = createStackNavigator({
  HomeScreenStack: { 
    screen: HomeScreenBottomTabs,
    navigationOptions: (options) => NavigationOptions(options, "", "homeScreen")
  },
  Scholarship: {
    screen: Scholarship,
    navigationOptions: (options) => NavigationOptions(options, "Scholarship", "sideMenu")
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
       screen: Apply,
       navigationOptions: (options) => NavigationOptions(options, "Apply ScholarShip", "sideMenu")
     },
     PostScholarship: {
      screen: PostScholarship,
      navigationOptions: (options) => NavigationOptions(options, "Post ScholarShip", "sideMenu")
    },
    ScholarshipHistory: {
      screen: ScholarshipHistory,
      navigationOptions: (options) => NavigationOptions(options, "ScholarShip History", "sideMenu")
    },
     Mywallet: {
       screen: Mywallet,
       navigationOptions: (options) => NavigationOptions(options, "My Wallet", "sideMenu")
     },
     Profile: {
       screen: Profile,
       //navigationOptions: (options) => NavigationOptions(options, "My Wallet", "sideMenu")
     },
     SendCoins: {
      screen: SendCoins
    },
  // LogOutScreen: {
  //   screen: Logout
  // },
     Scanner:{
       screen: Scanner,
       navigationOptions: (options) => NavigationOptions(options, "QR Scan", "sideMenu")
     },
     Funding: {
      screen: Funding
     },
     Timeline:{
       screen: MyTimeline,
       navigationOptions: (options) => NavigationOptions(options, "My Timeline", "sideMenu")
     },
     Language:{
       screen: Language,
       navigationOptions: (options) => NavigationOptions(options, "Languages Known", "sideMenu")
     },
     Topics:{
       screen: Topics,
       navigationOptions: (options) => NavigationOptions(options, "Interested Topics", "sideMenu")
     },
    Notifications:{
      screen: Notifications,
      navigationOptions: (options) => NavigationOptions(options, "Notifications", "sideMenu")
    },
    Edit:{
      screen: Edit,
      navigationOptions: (options) => NavigationOptions(options, "Profile Edit", "sideMenu")
    },    
    SearchScreen: {
      screen: SearchScreen,
      //`navigationOptions: (options) => NavigationOptions(options, "Search", "search")
      
    },
    EnterPreneurForm: {
      screen: EnterPreneurForm,
      navigationOptions: (options) => NavigationOptions(options, "EnterPreneur Form", "sideMenu")
    },
    InvestorForm: {
      screen: InvestorForm,
      navigationOptions: (options) => NavigationOptions(options, "Investor Form", "sideMenu")
    },    
    Post:{
      screen: Post,
      navigationOptions: (options) => NavigationOptions(options, "Create Post", "sideMenu"),
    },        
    Startups:{
      screen: Startups,
      navigationOptions: (options) => NavigationOptions(options, "Startup Communities", "sideMenu"),
    },
    CompanyProfile:{
      screen: CompanyProfile,
      navigationOptions: (options) => NavigationOptions(options, "Company Name", "sideMenu"),
    }        
})
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
    
});

const DrawerAuthStack = createDrawerNavigator(
  {
    
    
    App: {
      screen: AppStack
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
      Auth: AuthStack,
      App: DrawerAuthStack
    },
    {
      initialRouteName: "AuthLoading"
    } 
  )
)

