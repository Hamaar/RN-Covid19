import React, {Component} from 'react';
import {View, SafeAreaView, Image, ScrollView} from 'react-native';
import IndonesiaReport from './IndonesiaReport';
import GlobalReport from './GlobalReport';
import DailyUpdateReport from './DailyUpdateReport';
import HomeViewStyles from '../../styles/HomeViewStyles';

class HomeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enableScrollViewScroll: true,
    };

    this.callBack = this.callBack.bind(this);
  }

  callBack(value) {
    this.setState({
      enableScrollViewScroll: value,
    });
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={HomeViewStyles.homeContainer}>
          <View style={HomeViewStyles.logoContainer}>
            <Image
              style={HomeViewStyles.sizeLogo}
              source={require('../../assets/title-logo.png')}
            />
          </View>

          <ScrollView scrollEnabled={this.state.enableScrollViewScroll}>
            <IndonesiaReport />
            <GlobalReport />
            <DailyUpdateReport />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

export default HomeView;
