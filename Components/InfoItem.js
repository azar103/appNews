import React from 'react'
import {StyleSheet, View,Text, Image, TouchableOpacity} from 'react-native'
import moment from 'moment'

class InfoItem extends React.Component{
render(){
    const { info, displayDetailFromNews } = this.props
     return(
          <TouchableOpacity
                style={styles.main_container}
                >
                <Image style={styles.image} source={{uri: info.urlToImage}} />
                   <Text style={styles.title_style} numberOfLines={2}>
                            {info.description}
                   </Text>
                   <Text style={styles.date_style}>{moment(info.publishedAt).startOf('hour').fromNow()}</Text>
          </TouchableOpacity>
  )
}
}
const styles = StyleSheet.create({
   main_container:{
      height: 280,
   },
   image:{
     flexDirection:'row',
     flex:6,
     margin: 5
   },
  title_style:{
    flexDirection:'row',
    flex:2,
    fontWeight:'bold',
    flexWrap:'wrap',
    marginTop:1,
    paddingLeft:3,
    fontSize: 18
  },
  date_style:{
    flex: 1,
    flexDirection:'row',
    color: '#666',
    fontSize: 12,
    paddingLeft: 5
  }

})

export default InfoItem
