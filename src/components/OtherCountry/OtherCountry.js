import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  TextInput,
} from 'react-native';
import {getAllCountryReport} from '../../utils/apiFunction';
import OtherCountryStyles from '../../styles/OtherCountryStyles';
import i18n from '../../i18n/i18n';

class OtherCountry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataAllCountry: [],
      text: '',
    };
  }

  componentDidMount() {
    getAllCountryReport().then(res => {
      this.setState({
        dataAllCountry: res,
      });
    });
  }

  OrderListBy = prop => {
    return function(a, b) {
      if (a[prop] > b[prop]) {
        return 1;
      } else if (a[prop] < b[prop]) {
        return -1;
      }
      return 0;
    };
  };

  SearchFilterFunction = text => {
    const newData = this.state.dataAllCountry.filter(function(item) {
      const itemData = item.countryRegion
        ? item.countryRegion.toUpperCase()
        : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      dataAllCountry: newData,
      text: text,
    });
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={OtherCountryStyles.otherCountryContainer}>
          <View style={OtherCountryStyles.logoContainer}>
            <Image
              style={OtherCountryStyles.sizeLogo}
              source={require('../../assets/title-logo.png')}
            />
          </View>
          <View style={OtherCountryStyles.searchCountryContainer}>
            <TextInput
              style={OtherCountryStyles.inputCountry}
              onChangeText={text => this.SearchFilterFunction(text)}
              value={this.state.text}
              underlineColorAndroid="transparent"
              placeholder={i18n.OTHER_COUNTRY_REPORT.PLACEHOLDER_SEARCH_COUNTRY}
            />
          </View>

          <View style={OtherCountryStyles.itemCountryContainer}>
            <Text style={OtherCountryStyles.titleOtherCountry}>
              {i18n.OTHER_COUNTRY_REPORT.TITLE_OTHER_COUNTRY_REPORT}
            </Text>
            <FlatList
              style={{marginTop: 8}}
              data={this.state.dataAllCountry.sort(
                this.OrderListBy('countryRegion'),
              )}
              renderItem={({item}) => (
                <View style={OtherCountryStyles.statusOtherCountryContainer}>
                  <Text style={OtherCountryStyles.textCountry}>
                    {item.provinceState === null
                      ? item.countryRegion
                      : item.countryRegion + ' (' + item.provinceState + ')'}
                  </Text>
                  <Text style={OtherCountryStyles.textStatus}>
                    {i18n.CONFIRMED} : {item.confirmed}
                  </Text>
                  <Text style={OtherCountryStyles.textStatus}>
                    {i18n.RECOVERED} : {item.recovered}
                  </Text>
                  <Text style={OtherCountryStyles.textStatus}>
                    {i18n.DEATH} : {item.deaths}
                  </Text>
                </View>
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default OtherCountry;
