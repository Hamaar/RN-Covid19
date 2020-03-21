import {StyleSheet} from 'react-native';

const DailyUpdateReportStyles = StyleSheet.create({
  dailyUpdateReportContainer: {
    padding: 0,
    marginTop: 14,
    overflow: 'hidden',
    borderRadius: 10,
  },
  itemDailyUpdateReportContainer: {
    backgroundColor: '#AC5555',
    flexWrap: 'nowrap',
    padding: 14,
  },
  titleDailyUpdateReport: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  contentDailyUpdateReportContainer: {
    backgroundColor: '#e18381',
    padding: 4,
    borderRadius: 10,
    marginTop: 8,
  },
  dateDailyReport: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textDailyReport: {
    fontSize: 16,
    textAlign: 'justify',
  },
});

export default DailyUpdateReportStyles;
