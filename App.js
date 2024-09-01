import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState('');

  const lisaaTaiPoista = operator => {
    switch (operator){
      case 'ADD':
        setTodos([...todos, {key:todo}]);
        setTodo('');
        break;
      case 'CLEAR':
        setTodos('');
        break;
    }
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        value={todo}
        onChangeText= {text => setTodo(text)}
        placeholder='Syötä uusi ostos'
      />
      <View style={styles.operators}>
        <View style={styles.buttonContainer}>
      <Button title='ADD' onPress={() => lisaaTaiPoista('ADD')} color='white'></Button>
      </View>
      <View style={styles.buttonContainer}>
      <Button title='CLEAR' onPress={() => lisaaTaiPoista('CLEAR')} color='white'></Button>
      </View>
      </View>
      <Text style={styles.shoppingListText}>Shopping list</Text>
      <FlatList 
      data={todos}
      renderItem={({item}) => <Text>{item.key}</Text>}/>
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
    paddingTop: 60,
  },
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 5,
    margin: 5,
    width: '50%',
    marginBottom: 20,
  },
  operators:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'blue',
    gap: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '20%',
  },
  shoppingListText: {
    color: 'blue',
    fontWeight: 'bold',
  }
});
