import { StyleSheet, Dimensions } from "react-native"

const dimensions = Dimensions.get('window')
const screenWidth = dimensions.width

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fundingButton: {
        alignItems:'center',
        justifyContent:'center',
        borderColor:'rgb(118,118,118)',
        borderWidth: 0.5,
        borderRadius:14,
        width: screenWidth-30,
        height:'8.1%',
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0.5 * 2 },
        shadowOpacity: 0.1,
        shadowRadius: 0.8 * 2,
        backgroundColor: 'white',
  },
  fundingText: {
      fontSize:20,
      color:'rgb(118,118,118)',
      fontWeight:'bold'
  },
  margins: {
    marginLeft:15,
    marginRight:15
  }
});

export default styles
