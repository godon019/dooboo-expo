// import { observer } from 'mobx-react/native';
import { Constants } from 'expo';
import React from 'react';
import { Provider } from 'mobx-react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import SwitchNavigator from './components/navigation/SwitchNavigator';
import appStore from './stores/appStore';
// import { ratio } from './utils/Styles';
// import { ICONS } from './utils/Icons';

// @observer
class App extends React.Component {
  render() {
    return (
      <Provider store={ appStore }>
        <View style={styles.container}>
          <SwitchNavigator />
        </View>
      </Provider>
    );
  }
}

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
});

export default App;