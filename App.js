import { createStackNavigator, createAppContainer } from 'react-navigation';
import SearScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator(
  {
    Search: SearScreen,
    ResultsShow: ResultsShowScreen
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'FoodMe'
    }
  }
);

export default createAppContainer(navigator);
