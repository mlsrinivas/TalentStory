import { StyleSheet } from "react-native"
const styles = StyleSheet.create({

selectedTab:{
    borderBottomWidth: 3,
    borderBottomColor: 'black',
  },
selectedText: {
    color: 'green',
  },
  tabsContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tab: {
    paddingTop: 14,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: 'yellow',
  },
  tabText: {
    fontSize: 17,
    lineHeight: 20,
    textAlign: 'center',
    color: 'red',
  },

})
export default styles
