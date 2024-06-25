import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Pressable, Text, View, TextInput, Alert } from 'react-native';

export default function App() {
  const [guess, setGuess] = useState('');

  
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1); 
   
  
  
  const[guessCount, setGuessCount]= useState(0);
  

  const handleGuess=()=>{
    const userGuess = parseInt(guess);
    setGuessCount(guessCount + 1);

    if (userGuess === randomNumber){
      Alert.alert(`Congratulations! You guessed the number in ${guessCount + 1} tries!`)
      resetGame()
    }else if (userGuess < randomNumber){
      Alert.alert('Your guess is too low.')
    }else if (userGuess > randomNumber){
      Alert.alert('Your guess is too high.')
    }
  }

    const resetGame = () => {
      setRandomNumber(Math.floor(Math.random() * 100) + 1)
      setGuessCount(0)
      setGuess('')
    }
  
  return (
    <View style={styles.container}>
      <Text>Gussenumber</Text>
      <Text>Guess a number between 1 and 100</Text>
      <TextInput
        style={styles.input}
        keyboardType='number-pad'
        onChangeText={setGuess}
        value={guess}
        placeholder="Enter your guess"
      />
      <Pressable style={styles.button} onPress={handleGuess}>
        <Text style={styles.buttonText}>Submit Guess</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  }, 
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 4,
    margin: 20,
    width: '20%',
  },
  
});
