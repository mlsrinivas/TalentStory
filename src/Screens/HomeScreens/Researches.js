import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { TextField } from 'react-native-material-textfield';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import BottomTabsHeader from '../../Components/ReUsableComponents/HomeScreenHeader/BottomTabsHeader'
import SearchScreen from '../SearchScreen'
import Icon from 'react-native-vector-icons/FontAwesome'
//import { Icon } from 'native-base';

export default class Researches extends React.Component {
  static navigationOptions = ({ navigation }) => ({
		header: null,
  })
  constructor(props) {
    super(props);
    this.state = {
      search: false,
      name: '',
      cardList: [{}, {}, {}, {}]
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
                          onPress = {() => {this.props.navigation.navigate('MyResearches')}}>
        <View style = {styles.inputstyle2}>
        <Text style = {{color:'black', marginTop:'4%', alignSelf:'center', fontSize:15}}>My Researches</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style = {{marginRight:'15%', }}
                                  onPress = {() => {this.props.navigation.navigate('JoinedResearches')}}>
        <View style = {styles.inputstyle2}>
        <Text style = {{color:'black', marginTop:'4%', alignSelf:'center', fontSize:15}}>Joined Researches</Text>
        </View> 
        </TouchableOpacity>
        </View>

        <View style = {{alignSelf:'center'}}>
          <View style = {styles.inputstyle3}>
          <Text style = {{color:'black', margin:'1%', fontSize:12, fontWeight:'bold'}}>#All Researches:</Text>
          </View>
        </View>

        <ScrollView>
          {this.state.cardList.map((lists,index) => (
          <View style = {styles.cardView}>
              <View style = {{marginLeft:'2%'}}>
                <Text style = {{color:'#B2B2B2', fontSize:12, marginTop:'1%'}}>Created On September 1,21:12</Text>
                <Text style = {{color:'black', fontSize:15, marginTop:'1%'}}>Monsoon TechVibes</Text>
                <Text style = {{color:'#B2B2B2', fontSize:12, marginTop:'1%'}}>the course of the day ra clarity on the phone with them now it's showing the house is in office today's Birthday and Happy</Text>
                <Text style = {{color:'#B2B2B2', fontSize:15, marginTop:'2%'}}>Three Weeks</Text>
                <Text style = {{color:'#B2B2B2', fontSize:15, marginTop:'2%'}}>345</Text>
                <Text style = {{color:'red', fontSize:15, marginTop:'2%'}}>Free/-</Text>
              </View>

            <View style = {{flexDirection:'row', justifyContent:'space-between', marginTop:'3%'}}>
              <View style = {{height:25, borderWidth:1, borderColor:'rgb(240,240,240)'}}>
                <Text style = {{margin:'2%', color:'#744E98', }}>#View</Text>
              </View>
              <View style = {{height:25, borderWidth:1, borderColor:'rgb(240,240,240)',}}>
                <Text style = {{margin:'2%', color:'black' }}>Pending</Text>
              </View>
            </View>

          </View>
          ))}
        </ScrollView>

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
              screenName={this.state.search == true ? 'Search' : 'Research'}
            />
            {/* {this.state.search == false && <View style={{borderTopWidth: 1, borderColor: 'gray'}} />} */}
           {
            this.state.search == true && <SearchScreen />
            }  
          {this.state.search == false && this.renderAddCommunity()}
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
cardView:{
  borderWidth:1, 
  borderColor:'rgb(240,240,240)', 
  width:'85%', 
  //height:100, 
  marginLeft:'10%', 
  marginTop:'5%',
  //borderBottomColor:'red',
  borderRadius:3,
  marginBottom:'2%'
}
  })