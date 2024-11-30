import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View, ScrollView } from 'react-native';

export default function App() {

  return (

    <View style={styles.container}>
      
      <View style={styles.cabeçalho}>
            <text>
              BIBLIOTECA
            </text>
      </View>
      


      <ScrollView>
        
        <View style={styles.buttonContainer}>
          <Button
            title='Livro'
            color='red'
            onPress={() => onMessage()} />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title='Outro livro'
            color='red'
            onPress={() => onMessage()} />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title='Outro livro'
            color='red'
            onPress={() => onMessage()} />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title='Outro livro'
            color='red'
            onPress={() => onMessage()} />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title='Outro livro'
            color='red'
            onPress={() => onMessage()} />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title='Outro livro'
            color='red'
            onPress={() => onMessage()} />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title='Outro livro'
            color='red'
            onPress={() => onMessage()} />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title='Outro livro'
            color='red'
            onPress={() => onMessage()} />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title='Outro livro'
            color='red'
            onPress={() => onMessage()} />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title='Outro livro'
            color='red'
            onPress={() => onMessage()} />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title='Outro livro'
            color='red'
            onPress={() => onMessage()} />
        </View>

      </ScrollView>
    </View>
  );

}

const styles = StyleSheet.create({

  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'right',
    justifyContent: 'top',
  },

  caixa: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginVertical: 10
  },

  cabeçalho: {
    flex: 1,
    backgroundColor: 'lightred',
    padding: 16,
    textAlign: "center"
  },

  descrição: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8
  },

  buttonContainer: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginVertical: 10

  },


});
