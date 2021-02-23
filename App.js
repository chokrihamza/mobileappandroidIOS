import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import indexScreen from './src/Screens/indexScreen';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/Screens/showScreen';
import CreateScreen from './src/Screens/CreateScreen';
import EditScreen from './src/Screens/EditScreen';
const navigator = createStackNavigator(
  {
    Index: indexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit:EditScreen,
  }, {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs',
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor:'aqua'
      }

      
    }
  }
);
const App = createAppContainer(navigator);
export default () => {
  return<Provider>
    <App/>
  </Provider>
  
};