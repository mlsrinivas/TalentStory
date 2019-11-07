import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import BottomTabsHeader from '../../Components/ReUsableComponents/HomeScreenHeader/BottomTabsHeader'
import SearchScreen from '../SearchScreen'
import Icon from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class Researches extends React.Component {
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
  renderElements() {
    return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
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
            
            </View>
    )
  }

  renderMaps(){

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
              screenName={this.state.search == true ? 'Search' : 'Researches'}
            />
             {
            this.state.search == true && <SearchScreen />
            }
        
        {this.state.search == false && this.renderElements()}
        <ScrollView>
        {this.state.search == false && this.renderMaps()}
        </ScrollView>
        
        { this.state.search == false && <View style={{position: 'absolute', bottom: 20, right:20}}>
          <TouchableOpacity>
              <View style={{backgroundColor:'#0073C0', width:50, height:50, borderRadius: 25, justifyContent: 'center', alignItems: 'center'}}>
                <Ionicons name='ios-add'size={29} color='#fff' onPress={()=>this.props.navigation.navigate('CreateResearch')} />
              </View>
            </TouchableOpacity>
         </View>
      }
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