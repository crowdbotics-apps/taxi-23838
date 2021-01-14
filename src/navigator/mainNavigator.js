import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile192974Navigator from '../features/UserProfile192974/navigator';
import Maps192955Navigator from '../features/Maps192955/navigator';
import Settings192933Navigator from '../features/Settings192933/navigator';
import Settings192918Navigator from '../features/Settings192918/navigator';
import NotificationList192917Navigator from '../features/NotificationList192917/navigator';
import Maps192916Navigator from '../features/Maps192916/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile192974: { screen: UserProfile192974Navigator },
Maps192955: { screen: Maps192955Navigator },
Settings192933: { screen: Settings192933Navigator },
Settings192918: { screen: Settings192918Navigator },
NotificationList192917: { screen: NotificationList192917Navigator },
Maps192916: { screen: Maps192916Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
