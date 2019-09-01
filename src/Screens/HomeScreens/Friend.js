import React from 'react';
import { View, Text, Image } from 'react-native'

export default class Friend extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image source = {require('../../../assets/noData.webp')} style = {{height:100, width:100}} />
        <View style = {{marginTop:'10%', justifyContent:'center'}}>
        <Text>No Friends</Text>
        </View>
        </View>
    );
  }
}