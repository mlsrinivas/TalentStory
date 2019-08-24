import React from 'react';
import { View, Text } from 'react-native'

export default class Friend extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>
            Friends Screen
          </Text>
        </View>
    );
  }
}