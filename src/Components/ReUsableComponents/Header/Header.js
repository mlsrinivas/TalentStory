import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";
//import { Header } from 'native-base';

const Header = props => (
    <View style={{justifyContent: 'flex-end'}}>
      <Text style={{fontFamily: 'dosis-bold', color: 'white', fontSize: 25}}>COMPANY LOGO</Text>
    </View>
);
  
  const ImageHeader = props => {
    console.log('ImageHeader props', props);
    return(
      <View style={{  backgroundColor: 'transparent'}}>
        <Image
         // style={StyleSheet.absoluteFill}
          source={require('../../../../assets/Login.jpeg')}
        />
        {/* <Header {...props} style={{ backgroundColor: 'transparent' }}/> */}
      </View>
    );
  }
export const NavigationOptions = (options, image) => {
    return {
        header: props => <ImageHeader {...props} />,
        // headerTitle: (<View style={{
        //     justifyContent: "center",

        //     marginRight: 30,
        //     alignItems: "center", flex: 1
        // }}> 
        //     <Text style={{
        //         fontWeight: 'bold', fontSize: 18

        //     }}> {screenName} </Text>

        // </View>),
        // headerRight: (
        //     <TouchableOpacity onPress={() => { navigation.openDrawer()}}
        //     style={{marginRight:20}}>

        //     </TouchableOpacity>
        // ),
        headerStyle: {
            shadowColor: 'transparent',
            elevation: 0,
            // backgroundColor:'#eee',
            // color:"rgba(13, 13, 13, 0.68)",
        },
        headerTitleStyle: {
            // alignSelf: 'center',
            // textAlign: "center",
            // justifyContent: 'center',
            // flex: 1,
            // fontWeight: 'bold',

        },
        //headerBackTitle: ' ',
        headerTintColor: 'white',
}}
  

  
 