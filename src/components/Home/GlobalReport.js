import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {getGlobalReport} from '../../utils/apiFunction';
import moment from 'moment';
import {PieChart} from 'react-native-svg-charts';
import GlobalReportStyles from '../../styles/GlobalReportStyles';
import i18n from '../../i18n/i18n';

class GlobalReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmed: 0,
      recovered: 0,
      deaths: 0,
      lastUpdate: '',
      data: [],
    };
  }

  componentDidMount() {
    getGlobalReport().then(res => {
      this.setState({
        confirmed: res.confirmed.value,
        recovered: res.recovered.value,
        deaths: res.deaths.value,
        lastUpdate: moment.utc(res.lastUpdate).format(i18n.TIME_FORMAT),
        data: [
          ...this.state.data,
          res.confirmed.value,
          res.recovered.value,
          res.deaths.value,
        ],
      });
    });
  }

  render() {
    const randomColor = () =>
      ('#' + ((Math.random() * 0xffffff) << 0).toString(10) + '000000').slice(
        0,
        7,
      );

    const pieData = this.state.data
      .filter(value => value > 0)
      .map((value, index) => ({
        value,
        svg: {
          fill: randomColor(),
          onPress: () => console.log('press', index),
        },
        key: `pie-${index}`,
      }));

    return (
      <View
        style={{
          marginTop: 14,
        }}>
        <View style={GlobalReportStyles.globalReportContainer}>
          <Text style={GlobalReportStyles.titleGlobalReport}>
            {i18n.GLOBAL_REPORT.TITLE_GLOBAL_REPORT}
          </Text>
          <Text style={GlobalReportStyles.dataGlobalReport}>
            {i18n.GLOBAL_REPORT.DATE_GLOBAL_REPORT}
            {this.state.lastUpdate}
          </Text>
          <View style={GlobalReportStyles.itemGlobalReportContainer}>
            <View style={{marginTop: 8}}>
              <View
                style={{
                  flexWrap: 'wrap',
                }}>
                <PieChart
                  style={GlobalReportStyles.sizePieChart}
                  data={pieData}
                />
              </View>
            </View>
            <View style={GlobalReportStyles.statusContainer}>
              <View style={GlobalReportStyles.itemStatusContainer}>
                <Text style={GlobalReportStyles.numItemStatus}>
                  {this.state.confirmed}
                </Text>
                <Text style={GlobalReportStyles.textItemStatus}>
                  {i18n.CONFIRMED}
                </Text>
              </View>
              <View style={GlobalReportStyles.itemStatusContainer}>
                <Text style={GlobalReportStyles.numItemStatus}>
                  {this.state.recovered}
                </Text>
                <Text style={GlobalReportStyles.textItemStatus}>
                  {i18n.RECOVERED}
                </Text>
              </View>
              <View style={GlobalReportStyles.itemStatusContainer}>
                <Text style={GlobalReportStyles.numItemStatus}>
                  {this.state.deaths}
                </Text>
                <Text style={GlobalReportStyles.textItemStatus}>
                  {i18n.DEATH}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default GlobalReport;
