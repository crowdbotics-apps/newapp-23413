import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings186137Navigator from '../features/Settings186137/navigator';
import UserProfile186130Navigator from '../features/UserProfile186130/navigator';
import Settings186129Navigator from '../features/Settings186129/navigator';
import Settings186127Navigator from '../features/Settings186127/navigator';
import SignIn2186125Navigator from '../features/SignIn2186125/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings186137: { screen: Settings186137Navigator },
UserProfile186130: { screen: UserProfile186130Navigator },
Settings186129: { screen: Settings186129Navigator },
Settings186127: { screen: Settings186127Navigator },
SignIn2186125: { screen: SignIn2186125Navigator },

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
