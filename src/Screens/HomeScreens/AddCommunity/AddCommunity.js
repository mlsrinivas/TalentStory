import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { TextField } from 'react-native-material-textfield';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import BottomTabsHeader from '../../../Components/ReUsableComponents/HomeScreenHeader/BottomTabsHeader'
import SearchScreen from '../../SearchScreen'
import Icon from 'react-native-vector-icons/FontAwesome'
//import { Icon } from 'native-base';


export default class AddCommunity extends React.Component {
  static navigationOptions = ({ navigation }) => ({
		header: null,
  })
  constructor() {
    super();
    this.state = {
      search: false,
      name: ''
    }
    this.updateParentComponent = this.updateParentComponent.bind(this)
  }

  updateParentComponent(search) { 
    this.setState({
      search: search
    })
  }


  renderAddCommunity() {
    const name = this.state;

    return (
      <View>
        <View style = {{flexDirection:'row'}}>
          <View style={ styles.inputstyle1 }>
          <TouchableOpacity>
          <Icon name='search' size={20} color='rgb(111,111,111)' style={{ margin:'3%' }}/>
          </TouchableOpacity>
          </View>
        </View>


        <View style = {{flexDirection: 'row',marginTop:'2%', justifyContent:'space-around'}}>
        <TouchableOpacity style = {{marginLeft:'22%', }}
                          onPress = {() => {this.props.navigation.navigate('CreateCommunity')}}>
        <View style = {styles.inputstyle2}>
        <Text style = {{color:'black', marginTop:'4%', alignSelf:'center', fontSize:15}}>Create Community</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style = {{marginRight:'15%', }}
                                  onPress = {() => {this.props.navigation.navigate('MyCommunities')}}>
        <View style = {styles.inputstyle2}>
        <Text style = {{color:'black', marginTop:'4%', alignSelf:'center', fontSize:15}}>My Communities </Text>
        </View>
        </TouchableOpacity>
        </View>

        <View style = {{alignSelf:'center'}}>
          <View style = {styles.inputstyle3}>
          <Text style = {{color:'black', margin:'1%', fontSize:12, fontWeight:'bold'}}>#Joined Communities:</Text>
          </View>
        </View>

        <View style = {{alignSelf:'center'}}>
          <View >
          <Text style = {{color:'#B5B5B5', marginTop:'70%', alignSelf:'center', alignItems:'center', fontSize:12}}>There are no more communities yet created or joined</Text>
          <Text style = {{color:'#B5B5B5', marginTop:'2%', alignSelf:'center', alignItems:'center', fontSize:12}}>drag to retry</Text>
          </View>
        </View>
      </View>
    )
  }

  render() {  

    return (
        <View style={{ flex: 1 }}>
          <BottomTabsHeader 
              navigation={this.props.navigation}
              updateParentComponent={this.updateParentComponent}
              search={this.state.search}
              screenName={this.state.search == true ? 'Search' : 'Add Community'}
            />
            {/* {this.state.search == false && <View style={{borderTopWidth: 1, borderColor: 'gray'}} />} */}
           {
            this.state.search == true && <SearchScreen />
            }  
        <ScrollView>
          {this.state.search == false && this.renderAddCommunity()}
        </ScrollView> 
        </View>
        
        
    );
  }
}

const styles = StyleSheet.create({
  inputstyle1:{
      height:45,
      borderColor:'#D3D3D3',
      borderWidth:1, 
      width:'96%',
      borderRadius:2,
      paddingHorizontal:15,
      marginTop:7,
      marginLeft:'2%',
      backgroundColor: 'rgb(240,240,240)',
  },
  inputstyle2:{
    height:40,
    borderColor:'black',
    borderWidth:1, 
    width:'90%',
    borderRadius:5,
    backgroundColor: 'rgb(240,240,240)',
},
inputstyle3:{
  height:25,
  borderColor:'rgb(240,240,240)',
  borderWidth:1, 
  width:'100%',
  borderRadius:5,
  marginTop:'2%',
},
  })