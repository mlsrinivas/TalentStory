import React from "react";
import { View, Text, Image } from "react-native";

const TalentStoryStar = props => {
  return (
      <View style={{flex:1}}>
          <View style={styles.actionButton}>
            <Image source={require('../../assets/tstar.png')} tintColor style={styles.buttonIcon}/>
          </View>
      </View>
    
  );
};

const styles = {
  actionButton: {
    backgroundColor: "#0073C0",
    width: 58,
    height: 58,
    borderRadius: 58/2,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: '30%',
  },
  buttonIcon: {
    width: '45%',
    height: '45%',
    tintColor: '#fff'
  }
}

export default TalentStoryStar;
