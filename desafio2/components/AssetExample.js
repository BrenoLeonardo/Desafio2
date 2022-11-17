import * as React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <View style={styles.linha}>
        <View style={styles.conteudo}>
          <Text style={styles.titulo}>WhatsApp</Text>
            <Image
              style={styles.logo}
              source={require('../assets/search.png')}
            />
          <Image style={styles.logo} source={require('../assets/sms.png')} />
          <Image
            style={styles.logo}
            source={require('../assets/more_vert.png')}
          />
        </View>
        <View style={styles.conteudo2}>
          <Text style={styles.opcao}>CHAMADAS</Text>
          <Text style={styles.opcao}>CONVERSAS</Text>
          <Text style={styles.opcao}>CONTATOS</Text>
        </View>
      </View>
      <View style={styles.usuarios}>
        <View style={styles.usuarioDes}>
          <Image
            style={styles.usuario}
            source={require('./imagens/batata.jpeg')}
          />
            <View style={styles.informacao}>
              <Text style={styles.nome}>USUARIO</Text>
              <Text style={styles.data}>16:16</Text>
              <Text style={styles.comentario}>BATATA!!1</Text> 
          </View>
        </View>
        <View style={styles.usuarioDes}>
          <Image
            style={styles.usuario}
            source={require('./imagens/bobEsponja.jpg')}
          />
          <View style={styles.informacao}>
            <Text style={styles.nome}>USUARIO2</Text>
            <Text style={styles.data}>15:38</Text>
            <Text style={styles.comentario}>Confio em você!</Text>
            
          </View>
        </View>
        <View style={styles.usuarioDes}>
          <Image
            style={styles.usuario}
            source={require('./imagens/gato.jpeg')}
          />
          <View style={styles.informacao}>
            <Text style={styles.nome}>USUARIO3</Text>
            <Text style={styles.data}>Ontem</Text>
            <Text style={styles.comentario}>abacaxi é bom demais</Text>
          </View>
        </View>
        <View style={styles.usuarioDes}>
          <Image
            style={styles.usuario}
            source={require('./imagens/agua.jpeg')}
          />
        
          <View style={styles.informacao}>
            <Text style={styles.nome}>USUARIO4</Text>
            <Text style={styles.data}>Ontem</Text>
            <Text style={styles.comentario}>Como vai indo?</Text>
          </View>
        </View>
        <View style={styles.usuarioDes}>
          <Image
            style={styles.usuario}
            source={require('./imagens/mar.jpeg')}
          />

          <View style={styles.informacao}>
            <Text style={styles.nome}>USUARIO5</Text>
            <Text style={styles.data}>15/11</Text>
            <Text style={styles.comentario}>Trator aerodinâmico</Text>
          </View>
        </View>
        <View style={styles.usuarioDes}>
          <Image
            style={styles.usuario}
            source={require('./imagens/g.jpg')}
          />

          <View style={styles.informacao}>
            <Text style={styles.nome}>USUARIO6</Text>
            <Text style={styles.data}>12/11</Text>
            <Text style={styles.comentario}>Até a próxima</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#ffffff',
    flexWrap: 'wrap'
  },
  linha: {
    width: '100%',
    height: '20%',
    //flex: 1,
    //flexDirection: 'row',
    //justifyContent: 'flex-start',
    //alignItems: 'flex-start',
    backgroundColor: '#075d57',
    marginBottom: '5%',
  },
  conteudo: {
    width: '100%',
    height: '50%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  titulo: {
    width: '50%',
    color: '#afdee0',
    marginRight: '30%',
    marginLeft: '5%',
    marginTop: '3%',
    fontSize: '120%',
  },
  logo: {
    height: '50%',
    width: '7%',
    marginRight: '5%',
    marginTop: '4%',
  },
  conteudo2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 2,
  },
  opcao: {
    height: 70,
    width: 100,
    color: '#afdee0',
    marginLeft: '5%',
    marginTop: '5%',
    fontSize: '80%',
  },
  usuarios: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'space-evelyn',
    
  },
  usuarioDes: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: '5%',
    marginBottom: '5%'
    
  },
  usuario: {
    height: 50,
    width: 50,
    backgroundColor: '#dad5d4',
    borderRadius: '50%',
    
  },
  informacao: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: '5%',
    flexWrap: 'wrap',
    // borderBottomWidth: 1, 
    // borderColor:  '#dad5d4'
    
  },
  nome: {
    width: '50%',
    color: '#141114',
    marginRight: '25%',
    marginTop: '2%',
    fontWeight: 700,
    fontSize: '70%',
  },
  data: {
    width: '20%',
    color: '#141114',
    fontSize: '70%',
    marginRight: '5%',
  },
  comentario: {
    width: '100%',
    color: '#141114',
    marginTop: '1%',
    fontSize: '70%',
    
  },
});

// <Button style={styles.interagir}>
