import {createStackNavigator, createAppContainer} from 'react-navigation'
import News from '../Components/News'
import InfoDetail from '../Components/infoDetail'
const Navigator = createStackNavigator({
    News:
    {
      screen: News,
      navigationOptions:{
        title:"L'equipe",
        headerStyle:{backgroundColor:'red'},
        headerTitleStyle:{color: 'white', fontStyle:'italic',fontWeight:'bold',paddingLeft:128}
      }
    },
    InfoDetail:
    {
      screen: InfoDetail,
      navigationOptions:{
        title:"L'equipe",
        headerStyle:{backgroundColor:'red'},
        headerTitleStyle:{color: 'white', fontStyle:'italic',fontWeight:'bold',paddingLeft:120}
      }
    }
})

export default createAppContainer(Navigator)
