import { StyleSheet, Dimensions } from "react-native"

const dimensions = Dimensions.get('window')
const imageWidth = dimensions.width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F7F7F7"
    },
    talentStory: {
        height: 520,
        //borderColor: '#ddd',
        borderBottomWidth: 0,
        borderTopWidth: 0,
        shadowColor: '#000',
        //shadowOffset: { width: 0, height: 0 },
        //shadowOpacity: 0.8,
        //shadowRadius: 1,
        //elevation: 1,
        marginTop: '2%',
        //marginBottom: '2%'
    },
    talenStoryCircle: {
        width: 42,
        height: 42,
        borderRadius: 21,
        borderWidth: 1,
        borderColor: '#ddd',
        marginTop: '4%',
        marginLeft: '4%',
    },
    talentStoryCircleImage: {
        width: 32,
        height: 30,
        marginTop: '12%',
        marginLeft: '10%'
    },
    talentStoryRow: {
        flexDirection: 'row'
    },
    horizontalDots: {
        marginTop: '4%',
        right: '6%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '60%'
    },
    talentStoryTextView: {
        marginTop: '4%',
        marginLeft: '4%',
    },
    storyTime: {
        fontSize:13,
        color: 'rgb(176, 171, 171)',
    },
    talentStoryDescriptionView: {
        marginLeft: '4%',
        marginTop: '4%',
        marginRight: '4%'
    },
    talentStoryDescription: {
        color:'#5E5E5E',
        fontSize: 14,
    },
    talentStoryText: {
        fontSize: 15,
        color:'#515151'
    },
    storyImage: {
        marginTop: '2%',
        height: '55%',
        width: imageWidth
    },
    likeCountView: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: '2%',
        borderWidth: 0.25,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderColor: '#ddd',
        height: '7%',   
    },
    likeCountText: {
        marginTop: '2%',
        //marginBottom: '1%',
        fontSize:13,
        //alignSelf: 'flex-start',
        color: 'rgb(176, 171, 171)',
    },
    shareCountText: {
        marginTop: '2%',
        //marginBottom: '1%',
        fontSize:13,
        alignSelf: 'flex-end',
        color: 'rgb(176, 171, 171)',
    },
    likeCommentShareView: {
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: '2%',
        bottom: '2%'
    },
    like: {
        flexDirection: 'row'
    },
    comment: {
        flexDirection: 'row'
    },
    share: {
        flexDirection: 'row'
    },
    likeCommentShareText: {
        fontSize:13,
        color: 'rgb(176, 171, 171)',
        marginLeft: '5%'
    },
});

export default styles
