import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'

export default class SideMenu extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Login')}}>
            <Text>
                Logout
            </Text>
        </TouchableOpacity>
        </View>
    );
  }
}