import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, Button, View, ScrollView } from 'react-native';
import { getRequest } from './Api';
import HomeScreen from './Telas/Taskcard';

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

      <View style={styles.cabeçalho}>
        <text>
          BIBLIOTECA
        </text>
      </View>



      <ScrollView>

        {
          livro.map((item, index) => (
            <HomeScreen
              key={item.id}
              name={item.name}
              autor={item.autor}
              quantidade={item.quantidade}
              status={"Done"}
              onClick={() => {
                
              }}
            />
          ))
        }


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
