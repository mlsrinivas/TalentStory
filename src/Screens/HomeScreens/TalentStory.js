import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../../Styles/HomeStyles/TalentStoryStyles'
import { ScrollView } from 'react-native-gesture-handler'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default class TalentStory extends React.Component {
  constructor() {
    super();
    this.state = {
      talentStoriesList: [
        {},
        {}
      ]
    }
  }
  render() {
    return (
        <View>
          <ScrollView>
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
                    <Entypo size={21} color='rgb(176, 171, 171)' name="dots-three-horizontal" />
                  </View>
                </View>
                <View style={styles.talentStoryDescriptionView}>
                  <Text style={styles.talentStoryDescription}> 
                    B2B Udaan In Talks To Raise $500 Mn {'\n'}Funding Round: Report {'\n'}
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
                  </View>
                  <View style={styles.likeCommentShareView}>
                    <View style={styles.like}>
                      <AntDesign style={{marginLeft: '4%'}} size={22} color='rgb(176, 171, 171)' name="like2" />
                      <Text style={[{marginTop: '1%'}, styles.likeCommentShareText]}>Like</Text>
                    </View>
                    <View style={styles.comment}>
                      <EvilIcons size={22} color='rgb(176, 171, 171)' name="comment" />
                      <Text style={styles.likeCommentShareText}>Comment</Text>
                    </View>
                    <View style={styles.share}>
                      <MaterialCommunityIcons size={22} color='rgb(176, 171, 171)' name="share" />
                      <Text style={[{right: '4%'}, styles.likeCommentShareText]}>Share</Text>
                    </View>
                  </View>
            </View>
            ))}
          </ScrollView>
        </View>
    );
  }
}
//style={[{flexDirection: 'column', alignItems: 'flex-start'}, styles.elementsContainer]}