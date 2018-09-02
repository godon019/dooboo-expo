import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { observer } from 'mobx-react/native';
// import StackViewStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';

import { colors } from '../../utils/Styles';
import appStore from '../../stores/appStore';
import IntroScreen from '../screen/Intro';
import TempScreen from '../screen/Temp';

const routeConfig = {
  Intro: {
    screen: IntroScreen,
    navigationOptions: {
      title: 'Intro',
    },
    path: 'intro',
  },
  Temp: {
    screen: TempScreen,
    path: 'temp',
  },
};

const navigatorConfig = {
  initialRouteName: 'Intro',
  // header: null,
  // headerMode: 'none',
  gesturesEnabled: true,
  statusBarStyle: 'light-content',
  // transitionConfig: () => ({ screenInterpolator:
  //   appStore.rootNavigatorActionHorizontal
  //     ? StackViewStyleInterpolator.forHorizontal
  //     : StackViewStyleInterpolator.forVertical,
  // }),
  navigationOptions: {
    headerStyle: {
      backgroundColor: colors.dodgerBlue,
      borderBottomColor: 'transparent',
      borderBottomWidth: 0,
      elevation: 0,
    },
    headerTintColor: 'white',
    headerTitleStyle: { color: 'white' },
  },
};

const RootStackNavigator = createStackNavigator(routeConfig, navigatorConfig);

@observer
class RootNavigator extends React.Component<any, any> {
  private static router = RootStackNavigator.router;

  public render() {
    return (
      <RootStackNavigator
        navigation={this.props.navigation}
      />
    );
  }
}

export default RootNavigator;