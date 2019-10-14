import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Alert, Dimensions, StyleSheet,TextInput } from 'react-native'
import { Icon } from 'native-base';
import styles from '../Styles/SideMenuStyles';
import Modal from 'react-native-modal'
import { Dropdown } from 'react-native-material-dropdown';
import  MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

export default class SideMenu extends React.Component {
  constructor() {
    super();
    this.state={
        isModalVisible:false,
        text:'',
    }
  }

  onModalState = () => {
      this.setState({ isModalVisible: true })
  }

  closeModal = () => {
      this.setState({ isModalVisible: false })
  }

  render() {
        let data = [{
                    value: 'General',
                },{
                    value: 'Performance',
                },{
                    value: 'Something Not Working',
                },{
                    value: 'Abusive Content',
                }];

    return (
      <ScrollView>
        <View style={{ flex:1,flexDirection: 'column'}}>
             <TouchableOpacity style={{ flex:1,flexDirection:'row' }}
                               onPress={()=>{this.props.navigation.navigate('Profile')}}>
                <Image source={require('../../assets/Splash.png')}
                       style={styles.profileimage}/>
                        <View style={styles.profilenamesview}>
                            <Text style={{ fontSize:18,color:'black',fontWeight:'bold'}}>User Name</Text>
                            <Text style={{ fontSize:12,color:'black', marginTop:'4%' }}>View Your Profile</Text>
                        </View>
                <Icon name='ios-arrow-forward' 
                      style={styles.iconarrowstyle}
                      onPress={()=>{this.props.navigation.navigate('home')}}/>
             </TouchableOpacity>
            <View style={{ borderBottomColor:'#f2f2f2',borderBottomWidth:1,marginTop:'4%' }} />
             
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Funding')}}
                               style={{flexDirection:'row'}}>
                <View style = {styles.imageAndText}>               
                    <View style={styles.circleBorder}/>
                    <Image source={require('../../assets/funding.png')}
                            style={styles.imagestyle} />
                            <View style = {styles.listview}>
                                <Text style={{ color:'black', paddingHorizontal:10 }}>
                                    Funding
                                </Text>
                        </View>
                </View>
            </TouchableOpacity>
            <View style={styles.linestyle} />

            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Startups')}}
                               style={{flexDirection:'row'}}>
                <View style = {styles.imageAndText}>               
                    <View style={styles.circleBorder}/>
                    <Image source={require('../../assets/scholarship.png')}
                            style={styles.imagestyle} />
                            <View style = {styles.listview}>
                                <Text style={{ color:'black', paddingHorizontal:10 }}>
                                    Startups
                                </Text>
                        </View>
                </View>
            </TouchableOpacity>
            <View style={styles.linestyle} />
            
            

             <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Scholarship')}}
                               style={{flexDirection:'row'}}>
                <View style = {styles.imageAndText}>               
                    <View style={styles.circleBorder}/>
                    <Image source={require('../../assets/scholarship.png')}
                            style={styles.imagestyle} />
                            <View style = {styles.listview}>
                                <Text style={{ color:'black', paddingHorizontal:10 }}>
                                    Scholarship
                                </Text>
                        </View>
                </View>
            </TouchableOpacity>
            <View style={styles.linestyle} />
            
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Mywallet')}}
                              style={{flexDirection:'row'}}>
                <View style = {styles.imageAndText}>               
                    <View style={styles.circleBorder}/>
                    <Image source={require('../../assets/scholarship.png')}
                            style={styles.imagestyle} />
                            <View style = {styles.listview}>
                                <Text style={{ color:'black', paddingHorizontal:10 }}>
                                    My Wallet
                                </Text>
                        </View>
                </View>
            </TouchableOpacity>
            <View style={styles.linestyle} />

              
            <TouchableOpacity onPress={this.onModalState}
                              style={{flexDirection:'row'}}>
                <View style = {styles.imageAndText}>
                    <View style={styles.circleBorder}/>
                    <Image source={require('../../assets/feedback.png')}
                           style={styles.imagestyle} />
                            <View style = {styles.listview}>
                                <Text style={{ color:'black', paddingHorizontal:10}}>
                                Feedback
                                </Text>
                        </View>
                </View>
            </TouchableOpacity>
            <View style={styles.linestyle} />         

{/*             
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('JoinedCommunity')}}
                              style={{flexDirection:'row'}}>
                <View style = {styles.imageAndText}>               
                    <View style={styles.circleBorder}/>
                    <Image source={require('../../assets/jionedcommunity.png')}
                            style={styles.imagestyle} />
                            <View style = {styles.listview}>
                                <Text style={{ color:'#515151', paddingHorizontal:10 }}>
                                    Joined Communities
                                </Text>
                        </View>
                </View>
            </TouchableOpacity>
            <View style={styles.linestyle} /> */}
            
            {/* <TouchableOpacity onPress={()=>{this.props.navigation.navigate('CreatedCommunity')}}
                              style={{flexDirection:'row'}}>
                <View style = {styles.imageAndText}>               
                    <View style={styles.circleBorder}/>
                    <Image source={require('../../assets/createdcommunity.png')}
                            style={styles.imagestyle} />
                            <View style = {styles.listview}>
                                <Text style={{ color:'#515151', paddingHorizontal:10 }}>
                                    Created Communities
                                </Text>
                        </View>
                </View>
            </TouchableOpacity>
            <View style={styles.linestyle} /> */}
            
            <TouchableOpacity style={{flexDirection:'row'}}>
                <View style = {styles.imageAndText}>               
                    <View style={styles.circleBorder}/>
                    <Image source={require('../../assets/rating.png')}
                            style={styles.imagestyle} />
                            <View style = {styles.listview}>
                                <Text style={{ color:'black', paddingHorizontal:10 }}>
                                    Rate the App
                                </Text>
                        </View>
                </View>
            </TouchableOpacity>
            <View style={styles.linestyle} />
            
            <TouchableOpacity style={{flexDirection:'row'}}>
                <View style = {styles.imageAndText}>               
                    <View style={styles.circleBorder}/>
                    <Image source={require('../../assets/rating.png')}
                            style={styles.imagestyle} />
                            <View style = {styles.listview}>
                                <Text style={{ color:'black', paddingHorizontal:10 }}>
                                    Share with Friends
                                </Text>
                        </View>
                </View>
            </TouchableOpacity>
            <View style={styles.linestyle} />
            
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Aboutus')}}
                              style={{flexDirection:'row'}}>
                <View style = {styles.imageAndText}>               
                    <View style={styles.circleBorder}/>
                    <Image source={require('../../assets/aboutus.png')}
                            style={styles.imagestyle} />
                            <View style = {styles.listview}>
                                <Text style={{ color:'black', paddingHorizontal:10 }}>
                                    About Us
                                </Text>
                        </View>
                </View>
            </TouchableOpacity>
            <View style={styles.linestyle} />
            
            <TouchableOpacity onPress={() => Alert.alert('Logout', 'Do you want to logout from app?', 
                                    [{text: 'No'}, {text: 'Yes', onPress: () => this.props.navigation.navigate('Login')}])} style={{flexDirection:'row'}}>
                <View style = {styles.imageAndText}>               
                    <View style={styles.circleBorder}/>
                    <Image source={require('../../assets/logout.png')}
                            style={styles.imagestyle} />
                            <View style = {styles.listview}>
                            <Text style={{ color:'black', paddingHorizontal:10 }}>
                                Logout
                            </Text>
                     </View>
                </View>
            </TouchableOpacity>
            <View style={{ borderBottomColor:'#DADADA',borderBottomWidth:1 }} />
            
            <View style={{ height:110 }}>
                <View style={{ backgroundColor:'#F6F6F6',alignItems:'center',justifyContent:'center',flexDirection:'column' }}>
                    <Text style={{ color:'#696969' }}>Version: 1.0.12</Text>
                    <Text style={{ color:'black',marginTop:'2%' }}>Powered by: TalentStory</Text>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Scanner')}}>
                            <MaterialCommunityIcons name='qrcode-scan' size={40} style={{ marginTop:'3%' }}/>
                        </TouchableOpacity>
                </View>
            </View>
        </View>
        <Modal isVisible={this.state.isModalVisible}> 
                <View style={modalstyles.content}>
                   {/* <View style={{ flexDirection:'row',margin:'5%'}}> */}
                   <View style={{ margin:'5%'}}>
                    <Text style={{ color:'#515151',fontSize:25,fontWeight:'bold' }}>Feedback</Text> 
                    <Text style={{ color:'#515151',fontSize:12 }}>Reinforce positive and negative behaviours</Text>
                    {/* </View> */}
                    </View> 
                    <View style={{ borderBottomColor:'#DADADA',borderBottomWidth:1,marginTop:'1%' }} />

                    <View style = {{marginLeft:'5%', marginRight:'5%', marginTop:'5%'}}>
                        <Dropdown
                        label='Select Category'
                        data={data}
                        itemCount = '5'
                        textColor = '#515151'
                        itemColor = '#515151'
                        />
                    </View>
                    
                    <TextInput  placeholder='Message'
                                style={modalstyles.inputtext}
                                editable={true}
                                multiline={true}
                                placeholderTextColor = '#B5B5B5'
                                onChangeText = { (text) => this.setState({text})}/>
                          
                    
                    <View style={{ flexDirection:'row',margin:'3%',justifyContent:'space-around',marginTop:'8%', marginBottom:'8%'}}>
                        <TouchableOpacity style={modalstyles.button}
                                          onPress={this.closeModal}>
                        <Text style={{ fontWeight:'bold',fontSize:17, color:'#515151' }}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={modalstyles.button}
                                          onPress={this.closeModal}>
                        <Text style={{ fontWeight:'bold',fontSize:17, color:'#515151' }}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
      </ScrollView>
    );
  }
}

const modalstyles= StyleSheet.create({
    content:{
        backgroundColor: 'white',
        borderRadius: 5,
        justifyContent:'space-between'
    },
    inputtext:{
        borderRadius:5,
        borderColor:'#B5B5B5',
        borderWidth:1,
        paddingHorizontal:10,
        margin:'3%',
        height:60,
        justifyContent:'space-around',
        fontSize:15
    },
    button:{
        borderRadius:5,
        borderColor:'#B5B5B5',
        borderWidth:1,
        alignItems:'center',
        height:32,
        width:150,
    }

})