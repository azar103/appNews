import React from 'react'
import {StyleSheet, View, Button, TextInput} from 'react-native'
class SearchNews extends React.Component{
  render(){
    return(
        <View style={{marginTop: 25}}>
           <TextInput placeholder="Rechercher une info..." style={styles.textinput}  />
           <Button title="Rechercher une Info"  style={styles.buttonStyle}  onPress={()=>{}} color="#E14343"  />

        </View>
    )
  }
}
const styles= StyleSheet.create({
   textinput:{
       height: 50,
       marginRight: 5,
       marginLeft: 5,
       paddingLeft: 10
   },
   buttonStyle:{
     height: 50
   }
})
export default SearchNews
