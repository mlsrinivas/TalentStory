import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native'

export default class Chat extends React.Component {
  constructor() {
    super();
  }
  render() {

    

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image source = {require('../../../assets/noData.webp')} style = {{height:100, width:100}} />
        <View style = {{marginTop:'10%', justifyContent:'center'}}>
        <Text>No Chats</Text>
        </View>
        </View>
    );
  }
}