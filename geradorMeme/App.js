
import React, {Component} from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = { texto1: '', texto2: ''};
  }

  alteraVogais = (texto) => {
    let novoTexto = texto.toLowerCase();
    novoTexto = novoTexto.replace(/(a|e|i|o|u)/g,'i');
    novoTexto = novoTexto.replace(/(á|à|ã|â)/g,'i');
    novoTexto = novoTexto.replace(/(é|è|ê)/g,'i');
    novoTexto = novoTexto.replace(/(í|ì|î)/g,'i');
    novoTexto = novoTexto.replace(/(ó|ò|ô)/g,'i');
    novoTexto = novoTexto.replace(/(ú|ù|û)/g,'i');
    return novoTexto;
  }

  escrever = (t) =>{
    this.setState({
      texto1: t,
      texto2: this.alteraVogais(t)
    })
  }

  render(){
    return(
      <View style={ styles.body }>
        <View>
          <Text style={ styles.titulo }>Criador de Mimimi</Text>
        </View>
        
        <View style={ styles.inputArea}>
          <TextInput 
            placeholder="Digite seu mimimi..."
            style={styles.input} 
            onChangeText={this.escrever}></TextInput>
        </View>
        
        <View style={styles.area}>
          <Text style={ [styles.texto, styles.texto1] }>
            { this.state.texto1.toUpperCase() }
          </Text>

          <Image 
            source={require('./src/imagens/mimimi.jpg')} 
            style={ styles.imagem}></Image>

          <Text style={ [styles.texto, styles.texto2] }>
            { this.state.texto2.toUpperCase() }
          </Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  body: {
    paddingTop:30,
    flex:1,
    backgroundColor:'#bbb',
    flexDirection: 'column',
    alignItems: 'center'
  },
  titulo: { 
    fontSize:30,
    color:'#fff',
  },
  inputArea:{
    alignSelf: "stretch",
  },
  input:{
    height:40,
    fontSize:20,
    padding:10,
    margin:20,
    borderWidth: 1,
    borderColor:'#999999',
    borderRadius:15,
    backgroundColor:"#eeeeee"
  },
  area:{
    width:300,
    height:300,
    marginTop:10
  },
  imagem:{
    marginTop:-70,
    width:300,
    height:300,
    zIndex:0
  },
  texto:{
    fontSize:20,
    color: '#fff',
    padding:10,
    backgroundColor: 'transparent',
    fontWeight:"bold",
    textAlign: 'center',
    height:70
  },
  texto1:{
    zIndex:1
  },
  texto2:{
    marginTop:-70,
    zIndex:1
  }
});