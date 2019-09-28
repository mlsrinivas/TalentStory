/*This is an example of Segmented Control Tab in React Native*/
import React, { Component } from 'react';
//Import React

import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';
//Import Basic React Native Component

import SegmentedControlTab from 'react-native-segmented-control-tab';
import { TouchableOpacity } from 'react-native-gesture-handler';
//Import SegmentedControlTab

export default class SearchScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: null,
     headerStyle: { backgroundColor: '#fff', elevation:0 }
     
    }
  }
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
      //Default selected Tab Index for single select SegmentedControlTab
      selectedIndices: [0],
      //Default selected Tab Indexes for multi select SegmentedControlTab
      customStyleIndex: 0,
      //Default selected Tab Indexes for cusatom SegmentedControlTab
      searchList: [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
    };
  }

  handleSingleIndexSelect = (index) => {
    //handle tab selection for single Tab Selection SegmentedControlTab
    this.setState(prevState => ({ ...prevState, selectedIndex: index }));
  };

  handleMultipleIndexSelect = (index) => {
    //handle tab selection for multi Tab Selection SegmentedControlTab
    const { selectedIndices } = this.state;
    if (selectedIndices.includes(index)) {
      //if included in the selected array then remove
      this.setState(prevState => ({
        ...prevState,
        selectedIndices: selectedIndices.filter(i => i !== index),
      }));
    } else {
      //if not included in the selected array then add
      this.setState(prevState => ({
        ...prevState,
        selectedIndices: [...selectedIndices, index],
      }));
    }
  };

  handleCustomIndexSelect = (index) => {
    //handle tab selection for custom Tab Selection SegmentedControlTab
    this.setState(prevState => ({ ...prevState, customStyleIndex: index }));
  };

  render() {
    const { selectedIndex, selectedIndices, customStyleIndex } = this.state;
    return (
      <View style={styles.container}>
      

        {/* Simple Segmented with Custom Styling*/}
        <View 
        style={{
          backgroundColor: '#fff',
          shadowColor: '#000000',
          shadowOffset:{ width:0, height:2 },
          shadowOpacity: 0.25,
          shadowRadius: 1.84,
          elevation: 3,
        }}
    >
            <SegmentedControlTab
            values={['People', 'Community']}
            selectedIndex={customStyleIndex}
            onTabPress={this.handleCustomIndexSelect}
            borderRadius={0}
            tabsContainerStyle={{ height: 50, backgroundColor: 'white', width: 200 }}
            tabStyle={{
                backgroundColor: 'white',
                borderWidth: 0,
                borderColor: 'transparent',
                
            }}
            activeTabStyle={{ backgroundColor: 'white', borderBottomWidth: 3, borderBottomColor: 'rgb(0,115,192)' }}
            tabTextStyle={{ color: 'rgb(0,115,192)', fontWeight: 'bold'}}
            activeTabTextStyle={{ color: 'rgb(0,115,192)', fontWeight: 'bold'}}
            />
        </View>
        
        {customStyleIndex === 0 && (
          <ScrollView style={{marginTop: 17}}>
         {this.state.searchList.map((item)=>(<View style={{
            flexDirection: 'row',
            width: Dimensions.get('window').width,
          //marginLeft: '4%'
          marginBottom: 27
          }}>
           <View key={item.index} style={{width: 42,
            height: 42,
            borderRadius: 21,
            borderWidth: 1,
            borderColor: '#ddd',
            marginLeft: '3%'
            }}>
           <Image style={{ width: 32,
        height: 30,
        marginTop: '12%',
        marginLeft: '10%'}} source={require('../../assets/postscholarship.png')}/>
         </View>
         <Text style={{marginLeft: '5%', color: 'rgb(92,92,92)'}}>
           SushmaSriDurga
         </Text>
         <View style={{flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '60%',
        right: '15%'
        }}>
         <TouchableOpacity style={{
           backgroundColor: 'rgb(0,115,192)', width: 80, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 15}}>
            <Text style={{color:'white', fontSize: 12}}>Add Friend</Text>
          </TouchableOpacity>
          </View>
         </View>))}</ScrollView>
        )}
        {customStyleIndex === 1 && (
          <ScrollView style={{marginTop: 17}}>
          {this.state.searchList.map((item)=>(<View><View style={{
             flexDirection: 'row',
             width: Dimensions.get('window').width,
           //marginLeft: '4%'
           //marginBottom: 27
           }}>
            <View key={item.index} style={{width: 42,
             height: 42,
             borderRadius: 21,
             borderWidth: 1,
             borderColor: '#ddd',
             marginLeft: '3%'
             }}>
            <Image style={{ width: 32,
         height: 30,
         marginTop: '12%',
         marginLeft: '10%'}} source={require('../../assets/rating.png')}/>
          </View>
          <View>
            <Text style={{marginLeft: '7%', color: 'rgb(92,92,92)'}}>
              Learning Group
            </Text>
            <Text style={{marginLeft: '7%', marginTop: 17, color: 'rgb(11,113,181)', fontSize: 12}}>
              Front End Tech
            </Text>
          </View>
          <View style={{flexDirection: 'row',
         justifyContent: 'flex-end',
         width: '60%',
         
         }}>
          
           <View style={{right: 50}}>
           <TouchableOpacity style={{
            backgroundColor: 'rgb(0,115,192)', width: 80, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 15}}>
             <Text style={{color:'white', fontSize: 12}}>join</Text>
           </TouchableOpacity>
           <Text style={{marginTop: 8, color: 'rgb(132,132,132)', fontSize: 12}}>
              React Native
            </Text>
            </View>
           </View>
          </View>
          <View style={{ borderBottomColor:'#f2f2f2', borderBottomWidth:1, marginTop: 10,  marginBottom: 10 }} />
          </View>))}</ScrollView>
        )}
      </View>
    );
  }
}
{/* <Text style={{marginTop: 10, color: 'rgb(132,132,132)', alignSelf: 'flex-end'}}>
              React
            </Text> */}
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 100
    // padding: 10,
  },
  headerText: {
    padding: 8,
    fontSize: 14,
    color: '#444444',
    textAlign: 'center',
  },
  tabContent: {
    color: '#444444',
    fontSize: 18,
    margin: 24,
  },
  Seperator: {
    marginHorizontal: -10,
    alignSelf: 'stretch',
    borderTopWidth: 1,
    borderTopColor: '#888888',
    marginTop: 24,
  },
  tabStyle: {
    borderColor: '#D52C43',
  },
  activeTabStyle: {
    backgroundColor: '#D52C43',
  },
});

