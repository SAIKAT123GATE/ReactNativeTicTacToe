import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
const Icons = ({name}) => {
  switch (name) {
      case 'cross':
          return <Icon name='times' size={45} color="#10A881"/>
      case 'circle':
         return <Icon name='circle-thin' size={45} color="#F4C724"/>
          
  
      default:
        return <Icon name='pencil' size={45} color="#303030"/>

  }
}

export default Icons