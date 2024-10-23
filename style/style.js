import { StyleSheet } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../style/Metrics';


export default StyleSheet.create({
  homescreen: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    fontFamily: 'Ubuntu', 
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: horizontalScale(10),
    fontFamily: 'Ubuntu', 
  },
  header: {
    paddingTop: verticalScale(30),
    marginBottom: verticalScale(15),
    backgroundColor: '#af53bd',
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center', 
    fontFamily: 'Ubuntu',
    color: 'white', 
    fontSize: moderateScale(28),
  },
  iconContainer: {
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: verticalScale(20),  
  },
  footer: {
    marginTop: 'auto',
    margin: horizontalScale(10),
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center',
    fontFamily: 'Ubuntu' 
  },
  title: {
    fontSize: moderateScale(20),
    margin: 0,
    marginBottom: verticalScale(30),
    textAlign: 'center',
    fontFamily: 'Ubuntu', 
  },
  goodLuck: {
    fontSize: moderateScale(18), 
    marginTop: verticalScale(10), 
    marginBottom: verticalScale(10), 
    textAlign: 'center',
    fontFamily: 'Ubuntu', 
  },
  textInput: {
    height: verticalScale(50), 
    width: '80%',
    marginBottom: verticalScale(20), 
    alignSelf: 'center',
  },
  rules: {
    fontSize: moderateScale(14), 
    marginBottom: verticalScale(10), 
    textAlign: 'center',
    lineHeight: verticalScale(20),
  },
  playButton: {
    width: '80%',
    alignSelf: 'center',
    paddingVertical: verticalScale(5), 
    marginBottom: verticalScale(5), 
  },
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  row: {
    marginBottom: verticalScale(15), 
    padding: horizontalScale(10),
  },
  pointsRow: {
    fontWeight: 'bold',
    paddingTop: verticalScale(20),
    fontFamily: 'Ubuntu', 
  },
  textStatus: {
    fontSize: moderateScale(16), 
    padding: horizontalScale(5), 
    margin: horizontalScale(10), 
    fontFamily: 'Ubuntu', 
  },
  throwsLeft: {
    padding: 0,
    marginBottom: verticalScale(20), 
    fontStyle: 'italic',
    fontSize: moderateScale(16), 
  },
  playerName: {
    fontSize: moderateScale(18),
    fontFamily: 'Ubuntu', 
  },
  totalPoints: {
    fontSize: moderateScale(24), 
    fontWeight: 'bold',
    padding: verticalScale(10), 
    //paddingTop: verticalScale(30), 
    //paddingBottom: verticalScale(5), 
  },
  headerCell: {
    backgroundColor: '#dfd4e1',
    color: '#fff',
    textAlign: 'center',
    fontSize: moderateScale(16), 
  },
  cell: {
    textAlign: 'center',
    paddingVertical: verticalScale(5),
    fontSize: moderateScale(16), 
    fontFamily: 'Ubuntu', 
  },
  clearButton: {
    margin: 'auto',
},

});
  