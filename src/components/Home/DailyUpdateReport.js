import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {getDailyReport} from '../../utils/apiFunction';
import moment from 'moment';
import DailyUpdateReportStyles from '../../styles/DailyUpdateReportStyles';
import i18n from '../../i18n/i18n';

class DailyUpdateReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataDaily: [],
    };
  }

  componentDidMount() {
    getDailyReport().then(res => {
      this.setState({
        dataDaily: res,
      });
    });
  }

  render() {
    return (
      <View style={DailyUpdateReportStyles.dailyUpdateReportContainer}>
        <View style={DailyUpdateReportStyles.itemDailyUpdateReportContainer}>
          <Text style={DailyUpdateReportStyles.titleDailyUpdateReport}>
            {i18n.DAILY_UPDATE_REPORT.TITLE_DAILY_REPORT}
          </Text>
          <FlatList
            data={this.state.dataDaily.reverse()}
            initialNumToRender={this.state.dataDaily.length}
            renderItem={({item}) => (
              <View
                style={
                  DailyUpdateReportStyles.contentDailyUpdateReportContainer
                }>
                <Text style={DailyUpdateReportStyles.dateDailyReport}>
                  {moment
                    .utc(item.reportDate)
                    .format(i18n.DAILY_UPDATE_REPORT.TIME_FORMAT_DAILY_REPORT)}
                </Text>
                <Text style={DailyUpdateReportStyles.textDailyReport}>
                  {item.mainlandChina} total cases in China and{' '}
                  {item.otherLocations} in other countries, so the total of all
                  cases confirmed is {item.totalConfirmed} today and{' '}
                  {item.totalRecovered} recovered today.
                </Text>
              </View>
            )}
            keyExtractor={item => item.reportDate}
          />
        </View>
      </View>
    );
  }
}

export default DailyUpdateReport;
