import React from 'react';
import { View, Text, Image } from 'react-native'
import BottomTabsHeader from '../../Components/ReUsableComponents/HomeScreenHeader/BottomTabsHeader'
import SearchScreen from '../SearchScreen'

export default class Friend extends React.Component {
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
  renderFriends() {
    return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Image source = {require('../../../assets/noData.png')} style = {{height:100, width:100}} />
            
              <Text style={{marginTop: '10%'}}>No Friends</Text>
          
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
              screenName={this.state.search == true ? 'Search' : 'Friends '}
            />
             {
            this.state.search == true && <SearchScreen />
            }
        {this.state.search == false && this.renderFriends()}
      </View>
        
    );
  }
}