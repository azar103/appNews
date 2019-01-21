import React from 'react'
import {StyleSheet,View,Button ,FlatList, Text, ActivityIndicator} from 'react-native'
import news from '../Helpers/newsData.js'
import InfoItem from './InfoItem.js'
import { getNewsFromApi } from '../API/newsAPI'
class News extends React.Component{
  constructor(props){
    super(props)
    this.state={
      news: [],
      isLoading: false

    }
  }
  _loadNews(){
    this.setState({isLoading: true})
    getNewsFromApi().then(data => {
      this.setState(
        {
         news: [...this.state.news, ...data.articles],
         isLoading: false
        }
        )
       })
       }
  componentDidMount(){
    this._loadNews()
  }
  _loading(){
    if(this.state.isLoading){
      return(
        <View style={styles.loading_container}>
           <ActivityIndicator size='large'  />
        </View>
      )
    }
  }
 _displayDetailFromNews = (author) => {
   this.props.navigation.navigate("InfoDetail", { author: author })
 }
  render(){

    return(
      <View style={styles.main_container}>
       <FlatList
            data = {this.state.news}
            keyExtractor={(item) => item.url}
            renderItem={({item})=><InfoItem info={item}  displayDetailFromNews={this._displayDetailFromNews} />}
            />
       {this._loading()}
       </View>
    )
  }
}
const styles= StyleSheet.create({
  main_container:{
      flex:1
  },
  header_container:{
    height: 50,
    backgroundColor: 'red',
    fontSize: 18,
    alignItems:'center',
    fontWeight:'bold'
  },
  text_style:{
    color: 'white',
    marginTop: 12,
    fontWeight: 'bold',
    paddingLeft:8
  },
  loading_container:{
    position:'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
export default News
