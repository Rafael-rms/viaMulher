import React from 'react';
import { Text, StyleSheet, Dimensions, Image, TouchableOpacity, Alert } from 'react-native';
import Swiper from 'react-native-swiper';


const CarrosselA = ({source, texto}) => {
  return (
    <Swiper 
      style={styles.carrossel}  
      showsButtons={false}
      dotStyle={styles.inativo}
      activeDotStyle={styles.ativo}
      autoplay={true} 
      autoplayTimeout={5}
    >
      <TouchableOpacity 
        onPress={()=>Alert.alert('Aumento de Tensão')}
        style={styles.slide}>
          <Image 
          style={styles.imagem}
          source={require('../../../assets/aumentoTensao.png')}/>
          <Text style={styles.texto}>Aumento de tensão</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.slide}>
          <Image 
          style={styles.imagem}
          source={require('../../../assets/atoViolencia.png')}/>
          <Text style={styles.texto}>Ato de Violencia</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.slide}>
        <Image 
        style={styles.imagem}
        source={require('../../../assets/luaMel.png')}/>
        <Text style={styles.texto}>Lua de Mel</Text>
      </TouchableOpacity>      
    </Swiper>
  );
};

const styles = StyleSheet.create({
  carrossel: {
    height: 350,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDCECE',
    width:'90%',
    alignSelf:'center',
    borderRadius:60
  },
  texto:{
    fontSize:20,
    backgroundColor:'#D69595',
    height:'auto',
    width:250,
    borderRadius:20,
    textAlign:'center',
    marginBottom:50

  },
  imagem:{
    height:231,
    width:235,
    marginBottom:20
  },
  inativo: {
    backgroundColor: 'gray',
    width: 12,
    height: 12,
    borderRadius: 6,
    margin: 3,
  },
  ativo: {
    backgroundColor: '#D69595',
    width: 16,
    height: 16,
    borderRadius: 8,
    margin: 3,
  },
});

export default CarrosselA;
