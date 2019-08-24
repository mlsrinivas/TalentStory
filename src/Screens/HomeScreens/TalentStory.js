import React from 'react';
import { View, Text } from 'react-native'

export default class TalentStory extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>
            TalentStory Screen
          </Text>
        </View>
    );
  }
}