import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, Button, View, ScrollView } from 'react-native';

import { getRequest } from '../Api';
import BookCard from '../BookCard';

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

      <View style={styles.header}>
        <Text>
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
              quantidade={`Qtd: ${item.quantidade}`}
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
    backgroundColor: 'silver',
    alignItems: 'left',
    justifyContent: 'top',
  },

  caixa: {
    backgroundColor: "grey",
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
    marginVertical: 10
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
    backgroundColor: "red",
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 3,
    marginVertical: 10

  },
  


});