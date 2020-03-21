import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {getIndonesiaReport} from '../../utils/apiFunction';
import moment from 'moment';
import IndonesiaReportStyles from '../../styles/IndonesiaReportStyles';
import i18n from '../../i18n/i18n';

class IndonesiaReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmed: 0,
      recovered: 0,
      deaths: 0,
      lastUpdate: '',
    };
  }

  componentDidMount() {
    getIndonesiaReport().then(res => {
      this.setState({
        confirmed: res.confirmed.value,
        recovered: res.recovered.value,
        deaths: res.deaths.value,
        lastUpdate: moment.utc(res.lastUpdate).format(i18n.TIME_FORMAT),
      });
    });
  }

  render() {
    return (
      <View style={{marginTop: 14}}>
        <View style={IndonesiaReportStyles.indonesiaReportContainer}>
          <Text style={IndonesiaReportStyles.titleIndonesiaReport}>
            {i18n.INDONESIA_REPORT.TITLE_INDONESIA_REPORT}
          </Text>
          <Text style={IndonesiaReportStyles.dateIndonesiaReport}>
            {i18n.INDONESIA_REPORT.DATE_INDONESIA_REPORT}{' '}
            {this.state.lastUpdate}
          </Text>
          <View style={IndonesiaReportStyles.statusContainer}>
            <View style={IndonesiaReportStyles.itemStatusContainer}>
              <Text style={IndonesiaReportStyles.numItemStatus}>
                {this.state.confirmed}
              </Text>
              <Text style={IndonesiaReportStyles.textItemStatus}>
                {i18n.CONFIRMED}
              </Text>
            </View>
            <View style={IndonesiaReportStyles.itemStatusContainer}>
              <Text style={IndonesiaReportStyles.numItemStatus}>
                {this.state.recovered}
              </Text>
              <Text style={IndonesiaReportStyles.textItemStatus}>
                {i18n.RECOVERED}
              </Text>
            </View>
            <View style={IndonesiaReportStyles.itemStatusContainer}>
              <Text style={IndonesiaReportStyles.numItemStatus}>
                {this.state.deaths}
              </Text>
              <Text style={IndonesiaReportStyles.textItemStatus}>
                {i18n.DEATH}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default IndonesiaReport;
