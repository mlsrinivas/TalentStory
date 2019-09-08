import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Alert, Dimensions, StyleSheet,TextInput } from 'react-native'
import { Icon } from 'native-base';
import styles from '../Styles/SideMenuStyles';
import Modal from 'react-native-modal'

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
    return (
      <ScrollView>
        <View style={{ flex:1,flexDirection: 'column'}}>
             <TouchableOpacity style={{ flex:1,flexDirection:'row' }}
                               onPress={()=>{this.props.navigation.navigate('Profile')}}>
                <Image source={require('../../assets/Splash.png')}
                       style={styles.profileimage}/>
                        <View style={styles.profilenamesview}>
                            <Text style={{ fontSize:18,color:'#808080',fontWeight:'bold'}}>User Name</Text>
                            <Text style={{ fontSize:12,color:'#BeBeBe', marginTop:'4%' }}>View Your Profile</Text>
                        </View>
                <Icon name='ios-arrow-forward' 
                      style={styles.iconarrowstyle}
                      onPress={()=>{this.props.navigation.navigate('home')}}/>
             </TouchableOpacity>
            <View style={{ borderBottomColor:'#f2f2f2',borderBottomWidth:1,marginTop:'4%' }} />
        
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
            
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('JoinedCommunity')}}
                              style={{flexDirection:'row'}}>
                <View style = {styles.imageAndText}>               
                    <View style={styles.circleBorder}/>
                    <Image source={require('../../assets/jionedcommunity.png')}
                            style={styles.imagestyle} />
                            <View style = {styles.listview}>
                                <Text style={{ color:'black', paddingHorizontal:10 }}>
                                    Joined Communities
                                </Text>
                        </View>
                </View>
            </TouchableOpacity>
            <View style={styles.linestyle} />
            
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('CreatedCommunity')}}
                              style={{flexDirection:'row'}}>
                <View style = {styles.imageAndText}>               
                    <View style={styles.circleBorder}/>
                    <Image source={require('../../assets/createdcommunity.png')}
                            style={styles.imagestyle} />
                            <View style = {styles.listview}>
                                <Text style={{ color:'black', paddingHorizontal:10 }}>
                                    Created Communities
                                </Text>
                        </View>
                </View>
            </TouchableOpacity>
            <View style={styles.linestyle} />
            
            <TouchableOpacity onPress={()=>onFeedBackModal}
                              style={{flexDirection:'row'}}>
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
            
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Login')}}
                              style={{flexDirection:'row'}}>
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
                                    [{text: 'No'}, {text: 'Yes'}])} style={{flexDirection:'row'}}>
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
                <View style={{ height:100,backgroundColor:'#F6F6F6',alignItems:'center',justifyContent:'center',flexDirection:'column' }}>
                    <Text style={{ color:'#696969' }}>Version: 1.0.12</Text>
                    <Text style={{ color:'#808080' }}>Powered by: TalentStory</Text>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Scanner')}}>
                            <Image source={require('../../assets/qrcode.png')} 
                                    style={{height:50,width:50,marginTop:'1%'}}/>
                        </TouchableOpacity>
                </View>
            </View>
        </View>
        <Modal isVisible={this.state.isModalVisible}>
                <View style={modalstyles.content}>
                   {/* <View style={{ flexDirection:'row',margin:'5%'}}> */}
                   <View style={{ margin:'5%'}}>
                    <Text style={{ color:'#000000',fontSize:20,fontWeight:'bold' }}>Feedback</Text> 
                    <Text style={{ color:'gray',fontSize:10 }}>Reinforce positive and negative behaviours</Text>
                    {/* </View> */}
                    </View> 
                    <View style={{ borderBottomColor:'#DADADA',borderBottomWidth:1,marginTop:'5%' }} />
                    
                    <TextInput  placeholder='Message'
                                style={modalstyles.inputtext}
                                editable={true}
                                multiline={true}
                                placeholderTextColor = '#c2c0c0'
                                onChangeText = { (text) => this.setState({text})}/>
                            
                    
                    <View style={{ flexDirection:'row',margin:'3%',justifyContent:'space-around',marginTop:'8%'}}>
                        <TouchableOpacity style={modalstyles.button}
                                          onPress={this.closeModal}>
                        <Text style={{ marginTop:'4%',fontWeight:'bold',fontSize:15 }}>cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={modalstyles.button}
                                          onPress={this.closeModal}>
                        <Text style={{ marginTop:'4%',fontWeight:'bold',fontSize:15 }}>submit</Text>
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
        borderRadius: 4,
        justifyContent:'space-between'
    },
    inputtext:{
        borderRadius:4,
        borderColor:'#000000',
        borderWidth:1,
        paddingHorizontal:10,
        margin:'3%',
        height:60,
        justifyContent:'space-around'
    },
    button:{
        borderRadius:4,
        borderColor:'#000000',
        borderWidth:1,
        alignItems:'center',
        height:35,
        width:100,
    }

})