import React,{useState} from 'react'
import {TouchableOpacity,Image , Text , StyleSheet, Dimensions} from "react-native"

const {width ,height } = Dimensions.get('window')

function index({item}: categoryItemProps) {
  return (
    <TouchableOpacity style={{width:width*0.25,height:width*0.24,flexDirection:'column',alignItems:'center',justifyContent:'space-between',marginTop:10}}>
        <Image style={{width:width*0.18,height:width*0.18,borderRadius:10}} source={{uri:item.src}} />
        <Text style={{fontSize:12,color:'#616161',fontWeight:'500'}}>{item.name}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({

})
export default index