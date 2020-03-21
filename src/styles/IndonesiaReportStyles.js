import {StyleSheet} from 'react-native';

const IndonesiaReportStyles = StyleSheet.create({
  indonesiaReportContainer: {
    flexWrap: 'wrap',
    padding: 14,
    backgroundColor: '#AC5555',
    borderRadius: 10,
  },
  titleIndonesiaReport: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  dateIndonesiaReport: {
    fontSize: 14,
    color: 'white',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  itemStatusContainer: {
    height: 50,
    width: 100,
    backgroundColor: '#e18381',
    padding: 4,
  },
  numItemStatus: {
    textAlign: 'center',
    fontSize: 20,
  },
  textItemStatus: {
    textAlign: 'center',
  },
});

export default IndonesiaReportStyles;
