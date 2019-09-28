import React from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import styles from '../../Styles/HomeStyles/TalentStoryStyles'
//import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons' 
import Feather from 'react-native-vector-icons/Feather'
import BottomTabsHeader from '../../Components/ReUsableComponents/HomeScreenHeader/BottomTabsHeader'
import SearchScreen from '../SearchScreen'

export default class TalentStory extends React.Component {
  static navigationOptions = ({ navigation }) => ({
		header: null,
  })
  constructor(props) {
    super(props);
    this.state = {
      talentStoriesList: [ {},{},{},{},{} ],
      search: false
    }
    this.updateParentComponent = this.updateParentComponent.bind(this)
  }

  updateParentComponent(search) {
    this.setState({
      search: search
    })
  }

  renderTalentStories() {
    return(
      <View>
          
     {/* <AntDesign name='like2' size={20} style={{position:'absolute',bottom:0}} /> */}
        
        
            {this.state.talentStoriesList.map((talentStory, index) => (
              <View key={index} style={styles.talentStory}>
                <View style={styles.talentStoryRow}>
                  <View style={styles.talenStoryCircle}>
                    <Image style={styles.talentStoryCircleImage} source={require('../../../assets/ts.png')}/>
                  </View>
                  <View style={styles.talentStoryTextView}>
                    <Text style={styles.talentStoryText}>Talentstory</Text>
                    <Text style={styles.storyTime}>27 days ago</Text>
                  </View>
                  <View style={styles.horizontalDots}>
                  <TouchableOpacity>

                    <Entypo size={21} color='rgb(176, 171, 171)' name="dots-three-horizontal" />
                    </TouchableOpacity>

                  </View>
                </View>
                <View style={styles.talentStoryDescriptionView}>
                  <Text style={styles.talentStoryDescription}> 
                    B2B Unicorn Udaan In Talks To Raise $500 Mn {'\n'}Funding Round: Report {'\n'}
                    B2B online marketplace Udaan is reportedly close to raise around $500 
                    Mn in a fresh funding round  led by Lightspeed Venture Partners and 
                    {/* DST Global.
                    Other investors such as Hillhouse Capital and Altimeter Capital are also said to be 
                    participating in this round. */}
                  </Text>
                </View>
                  <Image style={styles.storyImage} source={require('../../../assets/storyImage.jpg')}/>
                  <View style={styles.likeCountView}>
                    <Text style={styles.likeCountText}>
                      3 likes
                    </Text>
                    <Text style={styles.shareCountText}>
                      2 shares
                    </Text>
                  </View>
                  <View style={styles.likeCommentShareView}>
                  <TouchableOpacity>
                    <View style={styles.like}>
                      <AntDesign style={{marginLeft: '12%'}} size={22} color='rgb(176, 171, 171)' name="like2" />
                      <Text style={[{marginTop: '1%'}, styles.likeCommentShareText]}>Like</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.comment}>
                      <EvilIcons size={22} color='rgb(176, 171, 171)' name="comment" />
                      <Text style={styles.likeCommentShareText}>Comment</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.share}>
                      <MaterialCommunityIcons size={22} color='rgb(176, 171, 171)' name="share" />
                      <Text style={[{marginRight: '4%'}, styles.likeCommentShareText]}>Share</Text>
                    </View>
                  </TouchableOpacity>
                  </View>
            </View>
            ))}
          
    
     
        </View>
    )
  }

  render() {
    return (
        <View style={{flex: 1}}>
          <BottomTabsHeader 
              navigation={this.props.navigation}
              updateParentComponent={this.updateParentComponent}
              search={this.state.search}
              screenName={this.state.search == true ? 'Search' : 'TalentStory'}
            />
            {this.state.search == false && <View style={{borderTopWidth: 1, borderColor: 'gray'}} />}
           {
            this.state.search == true && <SearchScreen />
            }  
          <ScrollView>
          
          { this.state.search == false &&
            this.renderTalentStories()
          }
         
          </ScrollView>
           { this.state.search == false && <View style={{position: 'absolute', bottom: 20, right:20}}>
       <TouchableOpacity>
          <View style={{backgroundColor:'#0073C0', width:50, height:50, borderRadius: 25, justifyContent: 'center', alignItems: 'center'}}>
            <MaterialCommunityIcons name='square-edit-outline'size={30} color='#fff' onPress={()=>this.props.navigation.navigate('Post')} />
          </View>
        </TouchableOpacity>
      </View>}
        </View>
    );
  }
}
//style={[{flexDirection: 'column', alignItems: 'flex-start'}, styles.elementsContainer]}