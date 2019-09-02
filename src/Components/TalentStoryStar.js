import React from "react";
import {
  TabBarBottom
} from "react-navigation";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
//import { LinearGradient } from "expo";
//import { Ionicons  } from '@expo/vector-icons';

const TalentStoryStar = props => {
  return (
      <View style={{flex:1}}>
          <TouchableOpacity style={styles.actionButton}>
            <Image source={require('../../assets/tstar.webp')} tintColor style={styles.buttonIcon}/>
          </TouchableOpacity>
      </View>
   
  );
};

const styles = {
  actionButton: {
    //flex: 1,
    backgroundColor: "#0073C0",
    width: 54,
    height: 54,
    borderRadius: 54/2,
    alignItems: 'center',
    justifyContent: 'center',
   // position: "absolute",
    bottom: '30%',
    // left: 155,
    // zIndex: 999
  },
  buttonIcon: {
    //textAlign: "center",
    width: '45%',
    height: '45%',
    tintColor: '#fff'
  }
}

export default TalentStoryStar;