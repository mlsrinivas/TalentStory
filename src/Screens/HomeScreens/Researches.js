import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import BottomTabsHeader from '../../Components/ReUsableComponents/HomeScreenHeader/BottomTabsHeader'
import SearchScreen from '../SearchScreen'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import { Dropdown } from 'react-native-material-dropdown';

export default class Researches extends React.Component {
  static navigationOptions = ({ navigation }) => ({
		header: null,
  })
  constructor(props) {
    super(props);
    this.state = {
      search: false,
      name: '',
      cardList: [ {}, {}, {}, {} ]
    }
    this.updateParentComponent = this.updateParentComponent.bind(this);
    this.dropDownJoin = this.dropDownJoin.bind(this);
  }

  updateParentComponent(search) { 
    this.setState({
      search: search
    })
  }

  dropDownJoin(){
   let data = [{ value:'join',value:'st5udy' }]
     return (<View>
             <Dropdown  data={data} itemCount = '1'/>
             </View>) 
  }

  renderAddCommunity() {
    const name = this.state;

    return (
      <View>
        <View style = {{flexDirection:'row'}}>
          <View style={ styles.inputstyle1 }>
          <TouchableOpacity>
          <MaterialIcons name='search' size={28} color='rgb(111,111,111)' style={{ margin:'3%' }}/>
          </TouchableOpacity>
          </View>
        </View>


        <View style = {{flexDirection: 'row',marginTop:'2%', justifyContent:'space-between'}}>
        <TouchableOpacity style = {{marginLeft:'15%', }}
                          onPress = {() => {this.props.navigation.navigate('MyResearches')}}>
        <View style = {styles.inputstyle2}>
        <Text style = {{color:'black', marginTop:'5%', alignSelf:'center', fontSize:15}}>My Researches</Text>
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
                <View style={{ flexDirection:'row' }}>
                <Text style = {{color:'#B2B2B2', fontSize:12, marginTop:'3%',marginLeft:'3%' }}>Created On September 1,21:12</Text>
                <Entypo name='dots-three-vertical' size={20} style={{ marginHorizontal:'33%',marginTop:'2%' }}/>
                </View>
                <Text style = {{color:'black', fontSize:15, marginTop:'1%',marginLeft:'3%' }}>Monsoon TechVibes</Text>
                <Text style = {{color:'#B2B2B2', fontSize:12, marginTop:'1%',marginLeft:'3%' }}>the course of the day ra clarity on the phone with them now it's showing the house is in office today's Birthday and Happy</Text>
                <View style={{ flexDirection:'row' }}>
                <Text style = {{color:'#B2B2B2', fontSize:15, marginTop:'2%',marginLeft:'3%' }}>Three Weeks</Text>          
                <Entypo name='dot-single' size={24} style={{ marginTop:'2%',marginLeft:'1%',color:'#B2B2B2' }}/>
                <Text style={{ color:'#B2B2B2', fontSize:15, marginTop:'2%' }}>27-07-2019</Text>
                </View>
                <Text style = {{color:'#B2B2B2', fontSize:15, marginTop:'2%',marginLeft:'3%' }}>345</Text>
                <Text style = {{color:'orange', fontSize:15, marginTop:'2%',marginLeft:'3%' }}>Free/-</Text>
              </View>

            <View style = {{flexDirection:'row', justifyContent:'space-between', marginTop:'3%'}}>
              <View style = {{height:25, borderWidth:1, borderColor:'rgb(240,240,240)',width:'18%'}}>
                <Text style = {{textAlign:'center',marginTop:'3%', color:'#744E98' }}>#View</Text>
              </View>
              <View style = {{height:25, borderWidth:1, borderColor:'rgb(240,240,240)',width:'25%'}}>
                <Text style = {{ textAlign:'center',marginTop:'3%', color:'black',fontWeight:'bold' }}>Pending</Text>
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
          { this.state.search == false && <View style={{position: 'absolute', bottom: 20, right:20}}>
       <TouchableOpacity>
          <View style={{backgroundColor:'#fff', width:60, height:60, borderRadius: 30, justifyContent: 'center', alignItems: 'center',elevation:5,shadowColor:'#000000',shadowOpacity: 0.25,
      shadowRadius: 1.84,shadowOffset:{ width:0, height:2 }, }}>
            <Ionicons name='ios-add'size={29} color='black' onPress={()=>this.props.navigation.navigate('CreateResearch')} />
          </View>
        </TouchableOpacity>
      </View>}
        </View>
        
        
    );
  }
}

const styles = StyleSheet.create({
  inputstyle1:{
      height:45,
      borderColor:'#f5f5f5',
      borderWidth:1, 
      width:'96%',
      borderRadius:2,
      paddingHorizontal:15,
      marginTop:'2%',
      marginLeft:'2%',
      marginRight:'2%',
      backgroundColor: '#f5f5f5',
      shadowColor: '#000000',
      shadowOffset:{ width:0, height:2 },
      shadowOpacity: 0.25,
      shadowRadius: 1.84,
      elevation: 3,
  },
  inputstyle2:{
    height:40,
    borderColor:'black',
    borderWidth:1, 
    borderRadius:5,
    backgroundColor: '#f5f5f5',
    width:'100%'
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