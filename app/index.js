import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, Button, View, ScrollView, TouchableOpacity } from 'react-native';

import { getRequest } from '../Api';
import BookCard from '../BookCard';
import { router } from 'expo-router';

export default function App() {

  const [livro, setLivro] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await getRequest();
        setLivro(resp)

      } catch (ex) {
        console.error(ex)
      }
    };

    fetchData();

  }, [])





  return (

    <View style={styles.container}>

      <View >
        <Text style={styles.header}>
          BIBLIOTECA
        </Text>
      </View>

      <ScrollView>

        {
          livro.map((item, index) => (
            <BookCard
              key={item.id}
              id={item.id}
              name={item.name}
              autor={item.autor}
              quantidade={item.quantidade}
            />
          ))
        }


      </ScrollView>
    </View>


  );

}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#BDB76B',
    alignItems: 'left',
    justifyContent: 'top',

    shadowRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 3,
    padding: 6,
  },


  cabeçalho: {
    justifyContent: 'flex-start',
    flex: 1,
    backgroundColor: 'silver',
    padding: 16,
    textAlign: "center"
  },

  descrição: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8
  },

  buttonContainer: {
    backgroundColor: "#556B2F",
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 3,
    marginVertical: 10

  },

  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 2,
    backgroundColor: '#556B2F',
    textAlign: 'center',
    shadowOpacity: 12,
    color: 'white',
    justifyContent: 'top',

  },


});