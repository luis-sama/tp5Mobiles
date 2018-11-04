import { createStackNavigator } from 'react-navigation';

import NuevoTotalScreen from './screens/NuevoTotalScreen';
import TotalesScreen from './screens/TotalesScreen';

export default createStackNavigator({
  Totales: {
    screen: TotalesScreen,
    navigationOptions: () => ({
      header: null,
    })
  },
  NuevoTotal: {
    screen: NuevoTotalScreen,
    navigationOptions: () => ({
      header: null,
    })
  },
}, {
    initialRouteName: 'Totales',
})