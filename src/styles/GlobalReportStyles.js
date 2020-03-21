import {StyleSheet} from 'react-native';

const GlobalReportStyles = StyleSheet.create({
  globalReportContainer: {
    flexWrap: 'wrap',
    padding: 14,
    backgroundColor: '#AC5555',
    borderRadius: 10,
  },
  titleGlobalReport: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  dataGlobalReport: {
    fontSize: 14,
    color: 'white',
  },
  itemGlobalReportContainer: {
    flexDirection: 'row',
    marginTop: 4,
    justifyContent: 'space-between',
  },
  sizePieChart: {
    height: 200,
    width: 200,
  },
  statusContainer: {
    flexDirection: 'column',
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

export default GlobalReportStyles;
