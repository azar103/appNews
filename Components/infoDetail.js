import React from 'react'
import {View ,StyleSheet, Text, ActivityIndicator} from 'react-native'

class InfoDetail extends React.Component{

    constructor(props){
      super(props)
      this.state={
        isLoading: true,
        info: undefined
      }
    }
    _loading(){
      if(this.state.isLoading){
        return(
           <View style={styles.loading_container}>
              <ActivityIndicator size ='large' />
           </View>
        )
      }
    }
    render(){
      const author = this.props.navigation.state.params.author
      return(
        <View style={ styles.main_container }>
            <Text>{author}</Text>
            {this._loading()}
        </View>
      )

    }
}

const styles = StyleSheet.create({
   main_container:{
     flex:1
   },
   loading_container:{
     position:'absolute',
     left: 0,
     right: 0,
     top: 0,
     bottom: 0,
     alignItems: 'center',
     justifyContent: 'center'
   }
})
export default InfoDetail
