import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native'
import BottomTabsHeader from '../../Components/ReUsableComponents/HomeScreenHeader/BottomTabsHeader'
import SearchScreen from '../SearchScreen'

export default class Chat extends React.Component {
  static navigationOptions = ({ navigation }) => ({
		header: null,
  })
  constructor() {
    super();
    this.state = {
      search: false
    }
    this.updateParentComponent = this.updateParentComponent.bind(this)
  }
  renderChats() {
    return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Image source = {require('../../../assets/noData.png')} style = {{height:100, width:100}} />
            
              <Text style={{marginTop: '10%'}}>No Chats</Text>
          
        </View>
  }
  updateParentComponent(search) {
    this.setState({
      search: search
    })
  }

  render() {

    

    return (
      <View style={{flex:1}}>
      <BottomTabsHeader 
            navigation={this.props.navigation}
            updateParentComponent={this.updateParentComponent}
            search={this.state.search}
            screenName={this.state.search == true ? 'Search' : 'Chat'}
          />
           {
          this.state.search == true && <SearchScreen />
          }
      {this.state.search == false && this.renderChats()}
    </View>
    );
  }
}