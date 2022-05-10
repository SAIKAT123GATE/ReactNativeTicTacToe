import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import Icons from './componenets/Icons';

const itemArray = new Array(9).fill('empty');
const App = () => {
  const [iscross, setiscross] = useState(false);
  const [winmessage, setwinmessage] = useState('');

  const Alert = message => {
    return Alert.alert(
      'Alert Title',
      message,
      [
        {
          text: 'Cancel',
          onPress: () => Alert.alert('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
      },
    );
  };
  const buttonPressed = index => {
    if (winmessage) {
      console.log('Already won');
      return;
    } else {
      if (itemArray[index] == 'empty') {
        itemArray[index] = !iscross ? 'cross' : 'circle';
        setiscross(!iscross);
      } else {
        console.log('filled');
        return;
      }
    }
    winningLogic();
  };


  //Reset Logic 

  const resetLogic=()=>{
    setwinmessage('');
    setiscross(false)
    itemArray.fill('empty',0,9);
  }

  //winning logic

  const winningLogic = () => {
    if (
      itemArray[0] == itemArray[1] &&
      itemArray[0] == itemArray[2] &&
      itemArray[0] != 'empty'
    ) {
      setwinmessage(`${itemArray[0]} won`);
    } else if (
      itemArray[3] !== 'empty' &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      setwinmessage(`${itemArray[3]} won`);
    } else if (
      itemArray[6] !== 'empty' &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      setwinmessage(`${itemArray[6]} won`);
    } else if (
      itemArray[0] !== 'empty' &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      setwinmessage(`${itemArray[0]} won`);
    } else if (
      itemArray[1] !== 'empty' &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      setwinmessage(`${itemArray[1]} won`);
    } else if (
      itemArray[2] !== 'empty' &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      setwinmessage(`${itemArray[2]} won`);
    } else if (
      itemArray[0] !== 'empty' &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      setwinmessage(`${itemArray[0]} won`);
    } else if (
      itemArray[2] !== 'empty' &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      setwinmessage(`${itemArray[2]} won`);
    }
  };

  return (
    <ScrollView style={styles.conatiner}>
      <Text style={styles.text}>TicTacToe Game</Text>
      <View style={styles.gridBox}>
        {itemArray.map((eachItem, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.box}
              onPress={() => buttonPressed(index)}>
              <Icons name={eachItem} />
            </TouchableOpacity>
          );
        })}
      </View>
      <View>
        {winmessage ? (
          <>
            <Text style={styles.text}>{winmessage}</Text>
            <TouchableOpacity style={styles.button} onPress={()=>resetLogic()}>
              <Text style={styles.buttonText}>Reload Game</Text>
            </TouchableOpacity>
          </>
        ) : (
          <Text style={styles.text}>{!iscross ? 'Cross' : 'Dot'} turns</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    padding: 10,
    backgroundColor: '#333945',
  },

  text: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
  box: {
    height: 90,
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f4c75',
    marginVertical: 7,
  },
  gridBox: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    alignSelf: 'flex-end',
    marginTop: 15,
  },
  button:{
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f4c75',
    marginVertical: 7,
    textAlign:"center",
    alignSelf:"center",
    
  },
  buttonText:{
    color:"white"
  }
});

export default App;
